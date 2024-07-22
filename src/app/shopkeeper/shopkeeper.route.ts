import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AddProductComponent} from "./add.product/add.product.component";
import {DetailProductComponent} from "../customer/detail.product/detail.product.component";
import {NoservicesComponent} from "../customer/noservices/noservices.component";
import {ContactComponent} from "../customer/contact/contact.component";
import {ConfProductComponent} from "./conf.product/conf.product.component";
import {ConfQuantiteWeightComponent} from "./conf.quantite.weight/conf.quantite.weight.component";
import {GestionprodComponent} from "./gestionprod/gestionprod.component";
import { CategoriesComponent } from "./categories/categories.component";
import { SubcategoriesComponent } from "./subcategories/subcategories.component";
import { AttributeComponent } from "./attribute/attribute.component";
import {authorizationGuard} from "../core/guard/authorization.guard";
const routesKeeper:Routes=[
  {path:"product",component:AddProductComponent, canActivate:[authorizationGuard] },
  {path:"confproduct",component:ConfProductComponent, canActivate:[authorizationGuard] },
  {path:"confquantiteweight",component:ConfQuantiteWeightComponent, canActivate:[authorizationGuard] },
  {path:"gestionprod",component:GestionprodComponent, canActivate:[authorizationGuard]},
  {path:"categorie",component: CategoriesComponent, canActivate:[authorizationGuard] },
  {path:"souscategorie",component: SubcategoriesComponent, canActivate:[authorizationGuard] },
  {path:"attribute",component: AttributeComponent, canActivate:[authorizationGuard] },




];

@NgModule({
  imports:[RouterModule.forChild(routesKeeper)],
  exports:[RouterModule]
})
export class ShopkeeperRoute{}
