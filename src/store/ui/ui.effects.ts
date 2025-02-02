import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import * as fromUI from "./ui.actions";
import { tap } from "rxjs/operators";
import { MatDialogRef, MatDialog } from "@angular/material/dialog";
import { SpinnerDialogComponent } from "../../app/shared/spinner-dialog/spinner-dialog.component";
@Injectable()
export class UIEffects {
  constructor(private _actions$: Actions, private _dialog: MatDialog) {}

  dialogRef: MatDialogRef<SpinnerDialogComponent>;

  @Effect({ dispatch: false })
  activateLoading$: Observable<Action> = this._actions$.pipe(
    ofType(fromUI.UiActionTypes.ACTIVATE_LOADING),
    tap((action: fromUI.ActivateLoadingAction) => this.setLoading(true))
  );

  @Effect({ dispatch: false })
  deactivateLoading$: Observable<Action> = this._actions$.pipe(
    ofType(fromUI.UiActionTypes.DEACTIVATE_LOADING),
    tap((action: fromUI.DeactivateLoadingAction) => this.setLoading(false))
  );

  private setLoading(isLoading: boolean) {
    if (isLoading) {
      this.dialogRef = this._dialog.open(SpinnerDialogComponent, {
        panelClass: ["transparent"],
        disableClose: true,
      });
    } else {
        this.dialogRef.close();
    }
  }
}
