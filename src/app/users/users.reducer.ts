import * as actions from './user.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

// Main data interface
import { User } from './model/user';

// Entity adapter
export const userAdapter = createEntityAdapter<User>();

export interface State extends EntityState<User> { }

const defaultUser = {
  ids: ['defaultuser'],
  entities: {
    'defaultuser': {
      id: 'defaultuser',
      email: 'defaultuser@kudo-assignment.io',
      password: 'test',
      name: 'Default User',
      avatarURL: 'https://kudo-assignment.s3-us-west-2.amazonaws.com/johndoe.jpg',
      answers: {
        'xj352vofupe1dqz9emx13r': 'optionOne',
        'vthrdm985a262al8qx3do': 'optionTwo',
        '6ni6ok3ym7mf1p33lnez': 'optionTwo'
      },
      questions: [
        '6ni6ok3ym7mf1p33lnez',
        'xj352vofupe1dqz9emx13r'
      ],
      active: true,
    }
  }
}

export const initialstate: State =  userAdapter.getInitialState(defaultUser);


export function usersReducer(
  state: State = initialstate,
  action: actions.UserActions) {
    switch (action.type) {
      case actions.CREATE:
        return userAdapter.addOne(action.user, state);

      case actions.UPDATE:
        return userAdapter.updateOne({
          id: action.id,
          changes: action.changes
        }, state);

      case actions.DELETE:
        return userAdapter.removeOne(action.id, state);

      default:
        return state;
    }
  }
