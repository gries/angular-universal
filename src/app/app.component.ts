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
  constructor(private aS: AppStateService, private translateService: TranslateService) {
    this.title = this.aS.title;
 }

 getLangs() {
   return this.translateService.getLangs();
 }
}
