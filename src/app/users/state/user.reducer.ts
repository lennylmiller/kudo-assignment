import { createReducer, on, createAction } from '@ngrx/store';
import { User } from '../model/user';

export interface UserState {
  showUserCode: boolean;
  currentUser: User;
  users: User[];
}


