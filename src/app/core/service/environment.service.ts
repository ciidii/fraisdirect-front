import {Injectable} from "@angular/core";

@Injectable({
  providedIn:"root"
})
export class Environment {
  private _url = "http://localhost:8080/fraisdirect/api/v1/"

  get url(): string {
    return this._url;
  }
}
