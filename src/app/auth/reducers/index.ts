import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from '@ngrx/store';
import { User } from '../model/user.model';
import { AuthActions } from '../action-types';

export interface AuthState {
  user: User;
  isLoggedIn: boolean;
}

export const initialAuthState: AuthState = {
  user: undefined,
  isLoggedIn: false
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action) => {
    return {
      user: action.user,
      isLoggedIn: true
    };
  }),

  on(AuthActions.logout, (state, action) => {
    return {
      user: undefined,
    };
  })
);
