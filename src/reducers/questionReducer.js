import { GET_QUESTIONS } from '../actions/questionAction';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return action.questions;
    default:
      return state;
  }
}
