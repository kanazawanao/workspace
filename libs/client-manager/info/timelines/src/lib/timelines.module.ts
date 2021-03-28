import { TimelinesEntryModule } from './entry/timelines-entry.module';
import { TimelinesListModule } from './list/timelines-list.module';
import { TimelinesRoutingModule } from './timelines-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NxModule } from '@nrwl/angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TimelinesRoutingModule,
    TimelinesListModule,
    TimelinesEntryModule,
    NxModule.forRoot(),
  ],
})
export class TimelinesModule {}
