import { createAction, props } from '@ngrx/store';
import { Question } from '../../questions/model/question'

export const vote = createAction(
  '[Question Page] Poll',
  props<{
    question: Question,
    option: string,
    newVotes: string[]
  }>()
);

