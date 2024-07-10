import {Router, RouterModule, Routes} from '@angular/router';
import {NgModule, NgModuleRef} from "@angular/core";
import {HomeComponent} from "./core/home/home.component";

export const routes: Routes = [
  {path:"customer",loadChildren:()=>import("./customer/customer.module").then(m=>m.CustomerModule)},
  {path:"shop",loadChildren:()=>import("./shopkeeper/shopkeeper.module").then(m=>m.ShopkeeperModule)},
];
@NgModule({
imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutes{

}
