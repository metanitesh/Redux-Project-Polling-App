import { GET_QUESTIONS, SAVE_ANSWER, SAVE_QUESTION } from '../actions/questionAction';
import { formatQuestion } from '../_DATA';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return action.questions;
    case SAVE_QUESTION: {
      const { question } = action;
      return { ...state, [question.id]: question };
    }
    case SAVE_ANSWER: {
      const { qid, authUser, answer } = action;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: [...state[qid][answer].votes, authUser],
          },
        },
      };
    }

    default:
      return state;
  }
}
