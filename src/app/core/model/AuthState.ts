import {User} from "./User";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthState {
  private _authenticated: boolean = false;
  private _token!: any;
  private _user: any;

  constructor() {
    this._authenticated = false;
    this._token = null;
    this._user = null;
  }

  get authenticated(): boolean {
    return this._authenticated;
  }

  set authenticated(value: boolean) {
    this._authenticated = value;
  }

  public isShopKeeper() {
    let isShopKeeper = false;
    if (this.authenticated) {

      if (this.user.role.libelle == "BOUTIQUIER") {
        isShopKeeper = true;
      }
    }
    return isShopKeeper;
  }

  public isCustomer() {
    let isCustomer = false;
    if (this.authenticated) {

      if (this.user.role.libelle == "CLIENT") {
        isCustomer = true;
      }
    }
    return isCustomer;
  }

  get token(): string {
    return this._token;
  }

  set token(value: any) {
    this._token = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

}
