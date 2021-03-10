import { Action, createReducer, on } from '@ngrx/store';
import { Question } from './../../questions/model/question';
import { vote } from '../questions/questions.actions';

export interface QuestionState {
  question: Question;
}

export const initialQuestionState: QuestionState = {
  question: undefined,
};

export const questionsReducerInternal = createReducer(
  initialQuestionState,

    /*
    question: Question,
    option: string,
    newVotes: string[]
    */
  on(vote, (state, { question, option, newVotes }) => {
    console.log({ question, option, newVotes });

    question[option].votes.length = 0;
    question[option].votes = [...newVotes];

    console.log('QUESTION', question);

    return {
      ...state,
      question,
      option,
      newVotes
    };
  }),
);

export function questionsReducer(state: QuestionState | undefined, action: Action) {
  return questionsReducerInternal(state, action);
}

