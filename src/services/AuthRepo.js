import {Alert} from 'react-native';
import {Storage} from './Storage';
export class AuthRepo {
  static login(data) {
    return async dispatch => {
      try {
        if (data.email === '' || data.password === '') {
          throw new Error('Fill all details');
        }
        dispatch({type: 'login request'});
        const users = Storage.getUser();

        const findUser = users.filter(user => user.email === data.email);
        if (findUser.length === 0) {
          throw new Error('user does not exist');
        }
        dispatch({
          type: 'login success',
          payload: {
            ...findUser[0],
            token: 'token',
          },
        });
      } catch (error) {
        Alert(error.message);
        dispatch({
          type: 'login failed',
        });
      }
    };
  }
}
