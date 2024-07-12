import {Router, RouterModule, Routes} from '@angular/router';
import {NgModule, NgModuleRef} from "@angular/core";
import {HomeComponent} from "./core/home/home.component";
import {AddProductComponent} from "./shopkeeper/add.product/add.product.component";

export const routes: Routes = [
  {path:"customer",loadChildren:()=>import("./customer/customer.module").then(m=>m.CustomerModule)},
  {path:"shopkeeper",loadChildren:()=>import("./shopkeeper/shopkeeper.module").then(m=>m.ShopkeeperModule)},
  
];
@NgModule({
imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutes{

}
