import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AddProductComponent} from "./add.product/add.product.component";
import {GestionprodComponent} from "./gestionprod/gestionprod.component";
import { CategoriesComponent } from "./categories/categories.component";
import { SubcategoriesComponent } from "./subcategories/subcategories.component";
import { AttributeComponent } from "./attribute/attribute.component";
import {authorizationGuard} from "../core/guard/authorization.guard";
import {PriceModelComponent} from "./price-model/price-model.component";
import {ConfProductPrice} from "./conf-product-price/conf-product-price";
const routesKeeper:Routes=[
  {path:"product",component:AddProductComponent, canActivate:[authorizationGuard] },
  {path:"conf-product-price",component:ConfProductPrice, canActivate:[authorizationGuard] },
  {path:"price-model",component:PriceModelComponent, canActivate:[authorizationGuard] },
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
