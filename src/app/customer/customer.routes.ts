import {RouterModule, Routes} from "@angular/router";
import {PresentationPageComponent} from "./presentation-page/presentation-page.component";
import {NgModule} from "@angular/core";
import {CreateAccountComponent} from "./create.account/create.account.component";
import {ValidateAccountComponent} from "./validate.account/validate.account.component";
 const routesCuster:Routes=[
  {path:"",component:PresentationPageComponent},
   {path:"login",component:CreateAccountComponent},
   {path:"validate",component:ValidateAccountComponent}
];

@NgModule({
  imports:[RouterModule.forChild(routesCuster)],
  exports:[RouterModule]
})
export class CustomerRoutes{}
