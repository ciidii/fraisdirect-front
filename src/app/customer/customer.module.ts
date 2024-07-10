import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerRoutes} from "./customer.routes";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[CustomerRoutes]
})
export class CustomerModule { }
