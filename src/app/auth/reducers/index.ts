import {
  createReducer,
  on,
} from '@ngrx/store';
import { User } from '../../users/model/user';
import { AuthActions } from '../action-types';

export interface AuthState {
  user: User;
  isLoggedIn: boolean;
}

export const initialAuthState: AuthState = {
  user: undefined,
  isLoggedIn: false,
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action) => {
    return {
      user: action.user,
      isLoggedIn: true,
    };
  }),

  on(AuthActions.logout, (state, action) => {
    return {
      user: undefined,
    };
  })
);
