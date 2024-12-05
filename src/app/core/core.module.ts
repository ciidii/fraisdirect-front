import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoadingSpinnerInterceptor} from "./interceptor/loading.spinner.interceptor";
import {NgxSpinnerModule} from "ngx-spinner";


@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    ToastrModule,
    BrowserAnimationsModule
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingSpinnerInterceptor, multi: true }
  ]
})
export class CoreModule { }
