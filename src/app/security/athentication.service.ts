import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AthenticationService {

  private USER_LOGIN = 'userLogin';
  private USER_PASSWORD = 'userPassword';
  private USER_NAME = 'username';
  private USER_ROLE = 'role';
  private KEY = 'key';

  constructor() { }

  public setBasicAuthenticationCredentials(login: string, password: string) {
    window.localStorage.removeItem(this.KEY);
    window.localStorage.setItem(this.KEY, window.btoa(login + ':' + password));

  }
  private setUserLogin(login: string) {
    window.localStorage.removeItem(this.USER_LOGIN);
    window.localStorage.setItem(this.USER_LOGIN, login);
  }

  public getBasicAuthenticationCredentials() {
    return window.localStorage.getItem(this.KEY);
  }

  public getUsername() {
    return window.localStorage.getItem(this.USER_NAME);
  }

  public setUsername(username: string) {
    window.localStorage.removeItem(this.USER_NAME);
    window.localStorage.setItem(this.USER_NAME, username);
  }

  public getUserRole() {
    return window.localStorage.getItem(this.USER_ROLE);
  }


  public setUserRole(role: string) {
    window.localStorage.removeItem(this.USER_ROLE);
    window.localStorage.setItem(this.USER_ROLE, role);
  }

  public logout() {
    window.localStorage.removeItem(this.KEY);
    window.localStorage.removeItem(this.USER_LOGIN);
    window.localStorage.removeItem(this.USER_NAME);
    window.localStorage.removeItem(this.USER_ROLE);
  }
}
