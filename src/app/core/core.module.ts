import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    CommonModule,
    ToastrModule
  ]
})
export class CoreModule { }
