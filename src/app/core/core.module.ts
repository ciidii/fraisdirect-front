import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import {SpinnerComponent} from "./spinner/spinner.component";
import {NgxSpinnerModule} from "ngx-spinner";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  exports:[
    CommonModule,
    ToastrModule,
  ]
})
export class CoreModule { }
