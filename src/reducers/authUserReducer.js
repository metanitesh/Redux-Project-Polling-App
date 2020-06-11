import { AUTH_USER } from '../actions/authUserAction';

export default function authUser(state = null, action) {
  console.log(action);
  switch (action.type) {
    case AUTH_USER:
      return action.user;
    default:
      return state;
  }
}
