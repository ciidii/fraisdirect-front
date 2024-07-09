import {Router, RouterModule, Routes} from '@angular/router';
import {NgModule, NgModuleRef} from "@angular/core";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {path:"",component:HomeComponent}
];
@NgModule({
imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutes{

}
