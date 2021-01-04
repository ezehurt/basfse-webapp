import { Action } from '@ngrx/store';
import { IUser } from '../../app/auth/models/IUser';

export enum AuthActionTypes {
  SET_USER = '[AUTH Component] Set User',
  UNSET_USER = '[AUTH Component] Unset User'
}

export class SetUserAction implements Action {
  readonly type = AuthActionTypes.SET_USER;
  constructor(public payload: IUser) {}
}

export class UnsetUserAction implements Action {
  readonly type = AuthActionTypes.UNSET_USER;
  constructor() {}
}

export type AuthActions = SetUserAction | UnsetUserAction;
