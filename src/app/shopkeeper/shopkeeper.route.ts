import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AddProductComponent} from "./add.product/add.product.component";
import {DetailProductComponent} from "./detail.product/detail.product.component";
import {NoservicesComponent} from "./noservices/noservices.component";
const routesKeeper:Routes=[
  {path:"product",component:AddProductComponent},
  {path:"detailproduct",component:DetailProductComponent},
  {path:"noservices",component:NoservicesComponent}

];

@NgModule({
  imports:[RouterModule.forChild(routesKeeper)],
  exports:[RouterModule]
})
export class ShopkeeperRoute{}
