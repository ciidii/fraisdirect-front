import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerRoutes} from "./customer.routes";
import {NgxPaginationModule} from "ngx-pagination";
import {ShopkeeperRoute} from "../shopkeeper/shopkeeper.route";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxPaginationModule,
    ShopkeeperRoute
  ],
  exports: [CustomerRoutes]
})
export class CustomerModule {

}
