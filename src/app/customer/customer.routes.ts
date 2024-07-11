import {RouterModule, Routes} from "@angular/router";
import {PresentationPageComponent} from "./presentation-page/presentation-page.component";
import {NgModule} from "@angular/core";
import {AddUserComponent} from "./add.user/add.user.component";
 const routesCuster:Routes=[
  {path:"",component:PresentationPageComponent},
   {path:"login",component:AddUserComponent}
];

@NgModule({
  imports:[RouterModule.forChild(routesCuster)],
  exports:[RouterModule]
})
export class CustomerRoutes{}
