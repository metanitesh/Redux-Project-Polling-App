import { GET_USERS } from '../actions/userAction';
import { SAVE_ANSWER, SAVE_QUESTION } from '../actions/questionAction';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return action.users;

    case SAVE_QUESTION: {
      const { question } = action;
      const { author } = question;
      console.log(author);
      return {
        ...state,
        [author]: {...state[author],
          questions: [...state[author].questions, question.id],
        },
      };
    }


    case SAVE_ANSWER: {
      const { qid, authUser, answer } = action;
      return {
        ...state,
        [authUser]: {
          ...state[authUser],
          answers: { ...state[authUser].answers, [qid]: answer },
        },
      };
    }

    default:
      return state;
  }
}
