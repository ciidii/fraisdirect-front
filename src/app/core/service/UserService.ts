// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../model/User";
import {ResponseEntityApi} from "../model/ResponseEntityApi";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/fraisdirect/api/v1/inscription';

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<ResponseEntityApi<User>> {
    return this.http.post<ResponseEntityApi<User>>(this.apiUrl, user);
  }
}
