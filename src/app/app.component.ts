import { Component } from '@angular/core';
import {AppStateService} from './core/services/app-state.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-universal';
  langs: string[] = ['en', 'de', 'fr', 'it', 'nl'];
  constructor(private aS: AppStateService, private translateService: TranslateService) {
    this.title = this.aS.title;
    this.translateService.setDefaultLang('de');
    this.translateService.addLangs(this.langs)
 }

 getLangs() {
   return this.translateService.getLangs();
 }
}
