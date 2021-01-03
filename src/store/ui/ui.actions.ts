import { Action } from '@ngrx/store';

export enum UiActionTypes {
  ACTIVATE_LOADING = '[UI Component] Activated Loading',
  DEACTIVATE_LOADING = '[UI Component] Deactivated Loading'
}

export class ActivateLoadingAction implements Action {
  readonly type = UiActionTypes.ACTIVATE_LOADING;
  constructor() {}
}

export class DeactivateLoadingAction implements Action {
  readonly type = UiActionTypes.DEACTIVATE_LOADING;
  constructor() {}
}

export type UiActions = ActivateLoadingAction | DeactivateLoadingAction;
