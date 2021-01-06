import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppState } from 'src/root.reducer';
import { environment } from '../../../environments/environment';
import * as fromAuth from '../../../store/auth/auth.actions';
import { IUser } from '../models/IUser';
declare const gapi: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  auth2: any;
  user: IUser = null;

  private _unsubscribe = new Subject();

  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
    this._store.select('user')
    .pipe(takeUntil(this._unsubscribe))
    .subscribe((state)=>{
      this.user = state.user;
    })
  }

  ngAfterViewInit(){
    this.googleInit();
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: environment.GOOGLE_CLIENT_ID,
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }

  attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();
        this._store.dispatch(new fromAuth.SetUserAction({
          idToken: googleUser.getAuthResponse().id_token,
          _id: profile.getId(),
          name: profile.getName(),
          email: profile.getEmail(),
          imageUrl: profile.getImageUrl()
        }));
      }, (error) => {
        this._store.dispatch(new fromAuth.UnsetUserAction());
      });
  }

  signOut() {
    this.auth2.disconnect();
    this._store.dispatch(new fromAuth.UnsetUserAction());
  }

  ngOnDestroy(){
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }
}
