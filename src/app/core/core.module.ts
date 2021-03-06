import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {AppStateClientService} from './services/app-state.client.service';
import {AppStateService} from './services/app-state.service';
import {AppStateServerService} from './services/app-state.server.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: []
})
export class CoreModule {
  static forServer(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: AppStateService,
          useClass: AppStateServerService
        }
      ]
    };
  }

  static forClient(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: AppStateService,
          useClass: AppStateClientService
        }
      ]
    };
  }
}
