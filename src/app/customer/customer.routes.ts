import {RouterModule, Routes} from "@angular/router";
import {PresentationPageComponent} from "./presentation-page/presentation-page.component";
import {NgModule} from "@angular/core";
 const routesCuster:Routes=[
  {path:"",component:PresentationPageComponent}
];

@NgModule({
  imports:[RouterModule.forChild(routesCuster)],
  exports:[RouterModule]
})
export class CustomerRoutes{}
