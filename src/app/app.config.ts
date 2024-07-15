import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {CoreModule} from "./core/core.module";
import {CustomerModule} from "./customer/customer.module";
import {ShopkeeperModule} from "./shopkeeper/shopkeeper.module";
import {provideToastr} from "ngx-toastr";
import {BrowserAnimationsModule, provideAnimations} from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideToastr({positionClass:"toast-top-left"}),
    provideAnimations(),
    importProvidersFrom([BrowserAnimationsModule]),
    importProvidersFrom(CoreModule),
    importProvidersFrom(CustomerModule),
    importProvidersFrom(ShopkeeperModule)

  ]
};
