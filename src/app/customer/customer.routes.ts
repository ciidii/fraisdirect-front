import {RouterModule, Routes} from "@angular/router";
import {PresentationPageComponent} from "./presentation-page/presentation-page.component";
import {NgModule} from "@angular/core";
import {CreateAccountComponent} from "./create.account/create.account.component";
import {ValidateAccountComponent} from "./validate.account/validate.account.component";
import {DetailProductComponent} from "./detail.product/detail.product.component";
import {AuthentificationComponent} from "./authentification/authentification.component";
import { EditerprofilComponent } from "./editerprofil/editerprofil.component";
 const routesCuster:Routes=[
  {path:"",component:PresentationPageComponent},
   {path:"create-account",component:CreateAccountComponent},
   {path:"validate",component:ValidateAccountComponent},
   {path:"product-details/:product-id",component:DetailProductComponent},
   {path: "editerprofil",component: EditerprofilComponent }
];

@NgModule({
  imports:[RouterModule.forChild(routesCuster)],
  exports:[RouterModule]
})
export class CustomerRoutes{}
