// user.service.ts
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../model/User";
import {ResponseEntityApi} from "../model/ResponseEntityApi";
import {Environment} from "./environment.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private environment: Environment) { }

  addUser(user: User): Observable<ResponseEntityApi<User>> {
    return this.http.post<ResponseEntityApi<User>>(this.environment.url+`inscription`, user);
  }

  verifyCode(code: string): Observable<ResponseEntityApi<any>> {
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json"),
      params: new HttpParams().set("code",code)
    };
    return this.http.post<ResponseEntityApi<any>>(this.environment.url+`activation`,{}, options);
  }

  getUserByIdentifier(identifier: string) {
      let options = {
        headers: new HttpHeaders().set("Content-Type", "application/json"),
        params: new HttpParams().set("email", identifier)
      };
      return this.http.get<ResponseEntityApi<User>>(this.environment.url+"user", options);
    }
}
