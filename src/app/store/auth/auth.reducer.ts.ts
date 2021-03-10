import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../auth/model/user.model';
import { AuthActions } from '../../auth/action-types';

export interface AuthState {
  user: User;
  isLoggedIn: boolean;
}

export const initialAuthState: AuthState = {
  user: undefined,
  isLoggedIn: false,
};

export const authReducerInternal = createReducer(
  initialAuthState,

  on(AuthActions.loginComplete, (state, { user, isLoggedIn }) => {
    return {
      ...state,
      user,
      isLoggedIn
    };
  }),

  on(AuthActions.logout, (state, {}) => {
    return {
      ...state,
      profile: null,
      isLoggedIn: false
    };
  })
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return authReducerInternal(state, action);
}
