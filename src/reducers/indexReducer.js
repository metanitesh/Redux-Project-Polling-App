import { combineReducers } from 'redux';
import users from './usersReducer';
import authUser from './authUserReducer';

export default combineReducers({
  users,
  authUser,
});
