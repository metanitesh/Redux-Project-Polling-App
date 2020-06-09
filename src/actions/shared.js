import { _getUsers } from '../_DATA';
import { getUsers } from './user';

export const GET_INITIAL_DATA = 'GET_INITIAL_DATA';

export const getInitialData = () => (dispatch) => {
  _getUsers()
    .then((users) => {
      dispatch(getUsers(users));
    })
    .catch((err) => {
      console.log(err);
    });
};
