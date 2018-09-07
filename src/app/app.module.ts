import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRouterModule} from './app-routing.module';
import {Error404Component} from './components/error404/error404.component';
import {HomeComponent} from './components/home/home.component';
import {CoreModule} from './core/core.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const DECLARATIONS = [
  HomeComponent,
  Error404Component
];

@NgModule({
  declarations: [
    AppComponent,
    DECLARATIONS
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    CoreModule.forClient(),
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
