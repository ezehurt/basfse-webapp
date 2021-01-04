import * as fromUI from './store/ui/ui.reducer';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

export interface AppState {
     ui: fromUI.State;
}

export const reducers: ActionReducerMap<AppState> = {
  ui: fromUI.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];

