import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {CoreModule} from "./core/core.module";
import {CustomerModule} from "./customer/customer.module";
import {ShopkeeperModule} from "./shopkeeper/shopkeeper.module";
import {provideToastr, ToastrModule} from "ngx-toastr";

export const  appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideToastr(),
    importProvidersFrom(CoreModule),
    importProvidersFrom(CustomerModule),
    importProvidersFrom(ShopkeeperModule),
  ]
};
