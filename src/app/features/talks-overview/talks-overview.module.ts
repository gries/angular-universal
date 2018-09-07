import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalksOverviewRoutingModule } from './talks-overview-routing.module';
import { TalksListComponent } from './talks-list/talks-list.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TalksOverviewRoutingModule,
    TranslateModule
  ],
  declarations: [TalksListComponent]
})
export class TalksOverviewModule { }
