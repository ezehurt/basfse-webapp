import * as fromUI from './ui.actions';

export interface State {
    isLoading: boolean;
}

export const initialState: State = {
   isLoading: false
};

export function reducer(state = initialState, action: fromUI.UiActions) {
  switch (action.type) {
    case fromUI.UiActionTypes.ACTIVATE_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case fromUI.UiActionTypes.DEACTIVATE_LOADING:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
