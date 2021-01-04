import * as fromUI from './store/ui/ui.reducer';
import * as fromAuth from './store/auth/auth.reducer';

import { ActionReducerMap, MetaReducer } from '@ngrx/store';

export interface AppState {
     ui: fromUI.State;
     user: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {
  ui: fromUI.reducer,
  user: fromAuth.reducer
};

export const metaReducers: MetaReducer<AppState>[] = [];

