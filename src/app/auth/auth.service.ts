import { Injectable } from '@angular/core';
import { IUser } from './models/IUser';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;
  constructor(
    private _http: HttpClient
  ) { }

  login(user: IUser) {
    return this._http.post(`${environment.apiUrl}/login/google`, {idToken: user.idToken});
  }

  getToken() {
    return this.token;
  }
}
