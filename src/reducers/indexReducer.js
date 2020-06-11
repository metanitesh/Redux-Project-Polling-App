import { combineReducers } from 'redux';
import users from './usersReducer';
import authUser from './authUserReducer';
import questions from './questionReducer';

export default combineReducers({
  users,
  authUser,
  questions,
});
