import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerRoutes} from "./customer.routes";
import {ToastrModule, ToastrService} from "ngx-toastr";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[CustomerRoutes]
})
export class CustomerModule {

}
