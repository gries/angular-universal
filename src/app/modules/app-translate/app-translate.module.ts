import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SwitchLangDirective } from './directives/switch-lang.directive';
import { AppTranslateModuleConfig } from './interfaces/app-translate-module-config.interface';

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
export class AppTranslateModule { 

  static config: AppTranslateModuleConfig;

  static forRoot(config: AppTranslateModuleConfig): ModuleWithProviders {
    AppTranslateModule.config = config;
    return {
      ngModule: AppTranslateModule,
      providers: [

      ]
    }
  }

  static forFeature(): ModuleWithProviders {
    return {
      ngModule: AppTranslateModule,
      providers: [

      ]
    }
  }

  constructor (private translateService: TranslateService) {
    if (AppTranslateModule.config) {
      translateService.setDefaultLang(AppTranslateModule.config.defaultLang)
      translateService.addLangs(AppTranslateModule.config.languages)
    }

  }
}
