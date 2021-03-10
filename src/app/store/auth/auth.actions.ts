import { createAction, props } from '@ngrx/store';
import { User } from '../../auth/model/user.model';

export const checkAuth = createAction('[Auth] checkAuth');
export const checkAuthComplete = createAction(
  '[Auth] checkAuthComplete',
  props<{ isLoggedIn: boolean }>()
);
export const login = createAction(
  '[Login Page] User Login',
  props<{ user: User }>()
);
export const loginComplete = createAction(
  '[Login Page] Login Complete',
  props<{ user: User; isLoggedIn: boolean }>()
);
export const logout = createAction('[Top Menu] Logout');
export const logoutComplete = createAction('[Top Menu] Logout Completee');
