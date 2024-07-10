import {RouterModule, Routes} from "@angular/router";
import {PresentationPageComponent} from "./presentation-page/presentation-page.component";
import {NgModule} from "@angular/core";

export const routes:Routes=[
  {path:"",component:PresentationPageComponent}
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[routes]
})
export class CustomerRoutes{}
