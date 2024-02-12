import AsyncStorage from '@react-native-async-storage/async-storage';
export class Storage {
  static key = 'USERS';
  static setUser(data) {
    return AsyncStorage.setItem('USERS', JSON.stringify(data));
  }
  static async getUser() {
    const parse = JSON.parse(await AsyncStorage.getItem('USERS'));
    return parse;
  }
  static clearUser() {
    return AsyncStorage.removeItem('USERS');
  }
} //suno yha localstorage se asyncstorage ku
//localstorage web ke liye bana hian
//async storge mobile ke liye bana hainok
