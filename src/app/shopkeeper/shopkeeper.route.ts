import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AddProductComponent} from "./add.product/add.product.component";
import {DetailProductComponent} from "../customer/detail.product/detail.product.component";
import {NoservicesComponent} from "./noservices/noservices.component";
import {ContactComponent} from "./contact/contact.component";
import {ConfProductComponent} from "./conf.product/conf.product.component";
import {ConfQuantiteWeightComponent} from "./conf.quantite.weight/conf.quantite.weight.component";
import {GestionprodComponent} from "./gestionprod/gestionprod.component";
import { CategoriesComponent } from "./categories/categories.component";
import { SubcategoriesComponent } from "./subcategories/subcategories.component";
import { AttributeComponent } from "./attribute/attribute.component";
const routesKeeper:Routes=[
  {path:"product",component:AddProductComponent},
  {path:"noservices",component:NoservicesComponent},
  {path:"contact",component:ContactComponent},
  {path:"confproduct",component:ConfProductComponent},
  {path:"confquantiteweight",component:ConfQuantiteWeightComponent},
  {path:"gestionprod",component:GestionprodComponent},
  {path:"categorie",component: CategoriesComponent},
  {path:"souscategorie",component: SubcategoriesComponent},
  {path:"attribute",component: AttributeComponent},
  



];

@NgModule({
  imports:[RouterModule.forChild(routesKeeper)],
  exports:[RouterModule]
})
export class ShopkeeperRoute{}
