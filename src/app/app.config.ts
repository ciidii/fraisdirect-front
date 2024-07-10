import {ApplicationConfig, importProvidersFrom, NgModule} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {CoreModule} from "./core/core.module";
import {CustomerModule} from "./customer/customer.module";
import {ShopkeeperModule} from "./shopkeeper/shopkeeper.module";

export const  appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(CoreModule),
    importProvidersFrom(CustomerModule),
    importProvidersFrom(ShopkeeperModule)
  ]
};
