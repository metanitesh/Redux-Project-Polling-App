import { AUTH_USER, UN_AUTH_USER } from '../actions/authUserAction';

export default function authUser(state = null, action) {
  switch (action.type) {
    case AUTH_USER:
      return action.user || null;
    case UN_AUTH_USER:
      return null;
    default:
      return state;
  }
}
