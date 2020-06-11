import { _getUsers, _getQuestions } from '../_DATA';
import { getUsers } from './userAction';
import { getQuestions } from './questionAction';

export const GET_INITIAL_DATA = 'GET_INITIAL_DATA';

export const getInitialData = () => (dispatch) => {
  Promise.all([_getUsers(), _getQuestions()])
    .then(([users, questions]) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
    })
    .catch((err) => {
      console.log(err);
    });
};
