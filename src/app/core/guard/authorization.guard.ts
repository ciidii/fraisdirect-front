import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthState} from "../model/AuthState";

export const authorizationGuard: CanActivateFn = (route, state) => {
if (inject(AuthState).isShopKeeper()){
 return true
}else {
  inject(Router).navigateByUrl("/customer/login").then(r => false)
}
  return true;
};
