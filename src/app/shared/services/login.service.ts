import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginForm } from 'src/app/security/security-models/login-form';
import { Observable } from 'rxjs';
import { LOGIN_KEY } from '../configuration-data/endpoints-keys';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http :HttpClient) { }

  public login(cridentials :LoginForm):Observable<any>{
    return this.http.post(LOGIN_KEY, cridentials);
  }
}
