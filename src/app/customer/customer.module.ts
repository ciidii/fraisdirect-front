import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerRoutes} from "./customer.routes";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports: [CustomerRoutes]
})
export class CustomerModule {

}
