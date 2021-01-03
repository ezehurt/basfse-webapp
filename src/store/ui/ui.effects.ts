import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromUI from './ui.actions';
import { tap } from 'rxjs/operators';
@Injectable()
export class UIEffects {

  // dialogRef: MatDialogRef<SpinnerDialogComponent>;

  @Effect({dispatch: false})
  activateLoading$: Observable<Action> = this.actions$.pipe(
    ofType(fromUI.UiActionTypes.ACTIVATE_LOADING),
    tap((action: fromUI.ActivateLoadingAction) => this.setLoading(true)));

  @Effect({dispatch: false})
  deactivateLoading$: Observable<Action> = this.actions$.pipe(
    ofType(fromUI.UiActionTypes.DEACTIVATE_LOADING),
    tap((action: fromUI.DeactivateLoadingAction) => this.setLoading(false)));


  constructor(
    private actions$: Actions,
  ) {}

  private setLoading(isLoading: boolean) {
  }
}
