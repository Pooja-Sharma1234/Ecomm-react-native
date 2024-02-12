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
        const users = await Storage.getUser();
        console.log(users, 'usersss');
        const findUser =
          users === null ? [] : users.filter(user => user.email === data.email);
        if (findUser.length === 0) {
          throw new Error('user does not exist');
        }
        Alert.alert('login success');
        dispatch({
          type: 'login success',
          payload: {
            ...findUser[0],
            token: 'token',
          },
        });
      } catch (error) {
        Alert.alert(error.message);
        dispatch({
          type: 'login failed',
        });
      }
    };
  }
  static signUp(userRegistration) {
    return async dispatch => {
      try {
        if (
          userRegistration.username === '' ||
          userRegistration.email === '' ||
          userRegistration.password === ''
        ) {
          throw new Error('Fill all details');
        }
        const users = await Storage.getUser();
        if (users === null) {
          Storage.setUser([userRegistration]);
        } else {
          Storage.setUser([...users, userRegistration]);
        }
        Alert.alert('signup success');
      } catch (error) {
        Alert.alert(error.message);
      }
    };
  }
  //yahi krna tha na ha to ab y login m dalu to chlega

  //ab register app banaye hm ok main jag raha hun teacher ji okkkkk v thanku bas bas rula diya naoho kisine kha tha vo kbhi roye nhi bahut roya hain raat bhar hahahahaha
}
//woh console ka baad main dekhte hain
//akele me oh taki koi dhk na le haaaan ab kariye haan ruko phle reason to btado iskakiska y
//are teacher ayse hi roya hahha  ok koi ni esi bate jyada yad nhi krte haan ab meri teacher a gayin ab nahi rounga hmm ab hum nhi rone denge ha  but aasu aaye to chipane ki jrurat nhi h okok thnak u ab kaam kariye ok
//wrna kaam bahda dunga ok drao mt ok
