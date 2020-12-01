import { TimelinesEntryContainerComponent } from './container/timelines-entry-container.component';
import { TimelinesEntryPresenterComponent } from './presenter/timelines-entry-presenter.component';
import { TimelinesEntryRoutingModule } from './timelines-entry-routing.module';
import { TimelinesEntryGuard } from './timelines-entry.guard';
import { TimelinesService } from '../timelines.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { UiDatePickerModule, UiInputModule } from '@workspace/ui';
import {
  TimelinesDataAccessModule,
  TimelinesFacade,
} from '@workspace/client-manager/data-accesss';

@NgModule({
  declarations: [
    TimelinesEntryPresenterComponent,
    TimelinesEntryContainerComponent,
  ],
  imports: [
    CommonModule,
    TimelinesEntryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UiInputModule,
    UiDatePickerModule,
    MatButtonModule,
    TimelinesDataAccessModule,
  ],
  providers: [TimelinesFacade, TimelinesEntryGuard, TimelinesService],
})
export class TimelinesEntryModule {}
