import { TimelineContainerComponent } from './container/timeline-container.component';
import { TimelinePresenterComponent } from './presenter/timeline-presenter.component';
import { TimelineRoutingModule } from './timeline-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [TimelinePresenterComponent, TimelineContainerComponent],
  imports: [CommonModule, TimelineRoutingModule],
})
export class TimelineModule {}
