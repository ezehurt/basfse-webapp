import * as fromAuth from './auth.actions';
import { IUser } from '../../app/auth/models/IUser';

export interface State {
  user: IUser;
}

const initialState: State = {
  user: null
};

export function reducer(state = initialState, action: fromAuth.AuthActions ): State {
  switch (action.type) {
    case fromAuth.AuthActionTypes.SET_USER: {
      return {
        ...state,
        user: {...action.payload}
      };
    }
    case fromAuth.AuthActionTypes.UNSET_USER: {
      return {
        ...state,
        user: null};
    }
    default: {
      return state;
    }
  }
}
