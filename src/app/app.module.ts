import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRouterModule} from './app-routing.module';
import {Error404Component} from './components/error404/error404.component';
import {HomeComponent} from './components/home/home.component';
import {CoreModule} from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { AppTranslateModule } from './modules/app-translate/app-translate.module';



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
    AppTranslateModule.forRoot({
      defaultLang: "en",
      languages: ['en', 'de', 'fr', 'it', 'nl']
    }),
    HttpClientModule,
    CoreModule.forClient(),
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
