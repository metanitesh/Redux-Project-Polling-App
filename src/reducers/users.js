import { GET_USERS } from '../actions/user';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    default:
      return state;
  }
}
