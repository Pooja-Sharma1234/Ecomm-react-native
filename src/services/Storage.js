export class Storage {
  static key = 'USERS';
  static setUser(data) {
    return localStorage.setItem('USERS', JSON.stringify(data));
  }
  static getUser() {
    const parse = JSON.parse(localStorage.getItem('USERS'));
    return parse;
  }
  static clearUser() {
    localStorage.removeItem('USERS');
  }
}
