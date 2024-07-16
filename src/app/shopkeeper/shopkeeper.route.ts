import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AddProductComponent} from "./add.product/add.product.component";
import {DetailProductComponent} from "./detail.product/detail.product.component";
import {NoservicesComponent} from "./noservices/noservices.component";
import {ContactComponent} from "./contact/contact.component";
import {ConfProductComponent} from "./conf.product/conf.product.component";
import {ConfQuantiteWeightComponent} from "./conf.quantite.weight/conf.quantite.weight.component";
const routesKeeper:Routes=[
  {path:"product",component:AddProductComponent},
  {path:"detailproduct",component:DetailProductComponent},
  {path:"noservices",component:NoservicesComponent},
  {path:"contact",component:ContactComponent},
  {path:"confproduct",component:ConfProductComponent},
  {path:"confquantiteweight",component:ConfQuantiteWeightComponent}

];

@NgModule({
  imports:[RouterModule.forChild(routesKeeper)],
  exports:[RouterModule]
})
export class ShopkeeperRoute{}
