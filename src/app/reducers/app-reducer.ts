import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { State as UserState } from '../users/users.reducer';
import { environment } from '../../environments/environment';
import { authReducer } from '../store/auth/auth.reducer';
import { usersReducer } from '../users/users.reducer';

export interface AppState {
  users: UserState;
}

export const reducers: ActionReducerMap<any> = {
  auth: authReducer,
  users: usersReducer,
};

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    // console.log("action", action);
    // console.log("state", state);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];
