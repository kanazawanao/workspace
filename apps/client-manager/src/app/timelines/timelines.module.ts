import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelinesRoutingModule } from './timelines-routing.module';
import { TimelinesPresenterComponent } from './presenter/timelines-presenter.component';
import { TimelinesContainerComponent } from './container/timelines-container.component';


@NgModule({
  declarations: [TimelinesPresenterComponent, TimelinesContainerComponent],
  imports: [
    CommonModule,
    TimelinesRoutingModule
  ]
})
export class TimelinesModule { }
