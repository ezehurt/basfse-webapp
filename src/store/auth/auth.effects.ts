import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as fromAuth from './auth.actions';
import { AuthService } from '../../app/auth/auth.service';


@Injectable()
export class AuthEffects {
  constructor(
    private _actions$: Actions,
    private _authService: AuthService
  ) {}

  @Effect({dispatch: false})
  setUser$ = this._actions$.pipe
  (ofType(fromAuth.AuthActionTypes.SET_USER),
  tap((action: fromAuth.SetUserAction) => this.validateWithBackend(action.payload)));


  @Effect({dispatch: false})
  unSetUser$ = this._actions$.pipe
  (ofType(fromAuth.AuthActionTypes.UNSET_USER),
  tap(() => {
      localStorage.removeItem('token');
  }));

  private validateWithBackend(user){
    this._authService.login(user)
    .subscribe((response:any)=>{
      if(response.ok){
        localStorage.setItem('token', user.idToken);
      }
    }, err =>{
      console.error(err);
    })
  }
}
