import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelinesEntryRoutingModule } from './timelines-entry-routing.module';
import { TimelinesEntryContainerComponent } from './container/timelines-entry-container.component';
import { TimelinesEntryPresenterComponent } from './presenter/timelines-entry-presenter.component';


@NgModule({
  declarations: [TimelinesEntryContainerComponent, TimelinesEntryPresenterComponent],
  imports: [
    CommonModule,
    TimelinesEntryRoutingModule
  ]
})
export class TimelinesEntryModule { }
