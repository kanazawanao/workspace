import { TimelinesListContainerComponent } from './container/timelines-list-container.component';
import { TimelinesListPresenterComponent } from './presenter/timelines-list-presenter.component';
import { TimelinesListRoutingModule } from './timelines-list-routing.module';
import { TimelinesListGuard } from './timelines-list.guard';
import { TimelinesService } from '../timelines.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UiTableModule } from '@workspace/ui';
import {
  TimelinesDataAccessModule,
  TimelinesFacade,
} from '@workspace/client-manager/data-accesss';

@NgModule({
  declarations: [
    TimelinesListPresenterComponent,
    TimelinesListContainerComponent,
  ],
  imports: [
    CommonModule,
    TimelinesListRoutingModule,
    ReactiveFormsModule,
    UiTableModule,
    TimelinesDataAccessModule,
  ],
  exports: [TimelinesListContainerComponent],
  providers: [TimelinesFacade, TimelinesListGuard, TimelinesService],
})
export class TimelinesListModule {}
