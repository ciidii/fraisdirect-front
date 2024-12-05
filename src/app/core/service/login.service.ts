import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserService} from "./UserService";
import {AuthState} from "../model/AuthState";
import {Environment} from "./environment.service";
import {jwtDecode} from "jwt-decode";

@Injectable({providedIn:"root"})
export class LoginService{
  roles: any;
  identifier!: any;
  accessToken!: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
    public authenticatedUserState: AuthState,
    private environment: Environment
  ) {
  }
  public login(username: string, password: string) {
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    };
    let body = {
      username: username,
      password: password
    };

    return this.http.post(this.environment.url + "connexion", JSON.stringify(body), options);
  }

  loadProfile(data: any) {
    this.accessToken = data["bearer"]
    let decodedJwt: any = jwtDecode(this.accessToken);
    this.identifier = decodedJwt.sub;
    this.roles = decodedJwt.roles;
    this.userService.getUserByIdentifier(this.identifier).subscribe(
      {
        next: user => {
          this.authenticatedUserState.token = this.accessToken;
          this.authenticatedUserState.authenticated = true
          this.authenticatedUserState.user = user.data;
          this.redirectToTheRightPage(this.authenticatedUserState)
          window.localStorage.setItem("bearer", this.accessToken);
        }, error: err => {
          console.log(err);
        }
      }
    );
  }

  private redirectToTheRightPage(authenticatedUserState: AuthState) {
    if (authenticatedUserState.authenticated && authenticatedUserState.user.role.libelle=="CLIENT"){
      this.router.navigateByUrl("/customer")
    }else if (authenticatedUserState.authenticated && authenticatedUserState.user.role.libelle=="BOUTIQUIER"){
      this.router.navigateByUrl("/customer")
    }
  }
  logout() {
    this.authenticatedUserState.authenticated = false;
    this.identifier = undefined;
    this.roles = undefined;
  }

  loadJwtTokenFromLocalStorage() {
    let token = window.localStorage.getItem("bearer");
    if (token) {
      this.loadProfile({"bearer": token})
    }
  }
}
