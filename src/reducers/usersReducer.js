import { GET_USERS } from '../actions/userAction';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    default:
      return state;
  }
}
