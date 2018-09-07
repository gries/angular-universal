import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SwitchLangDirective } from './directives/switch-lang.directive';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const DIRECTIVES = [SwitchLangDirective];
const DECLARATIONS = [DIRECTIVES];
const EXPORTS = [TranslateModule, DIRECTIVES];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader), 
        deps: [HttpClient]
      }
    })
  ],
  declarations: [DECLARATIONS],
  exports: [EXPORTS]
})
export class AppTranslateModule { }
