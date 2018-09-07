import { Directive, Input, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Directive({
  selector: '[switchLang]'
})
export class SwitchLangDirective {

  @Input() switchLang;

  constructor(private translateService: TranslateService) { 

  }

  @HostListener('click', ['$event'])
  setLang(): void {
    if (this.switchLang && 
      this.translateService.getLangs().indexOf(this.switchLang) !== -1) {
      this.translateService.use(this.switchLang);
    }
  }

}
