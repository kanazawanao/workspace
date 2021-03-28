import { TimelinesEntryContainerComponent } from './container/timelines-entry-container.component';
import { TimelinesEntryPresenterComponent } from './presenter/timelines-entry-presenter.component';
import { TimelinesEntryGuard } from './timelines-entry.guard';
import { TimelinesDataAccessModule } from '../data-access/timelines-data-access.module';
import { TimelinesService } from '../timelines.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { UiDatePickerModule, UiInputModule } from '@workspace/ui';
import { TimelinesFacade } from '../data-access/+state/timelines.facade';

@NgModule({
  declarations: [
    TimelinesEntryPresenterComponent,
    TimelinesEntryContainerComponent,
  ],
  imports: [
    CommonModule,
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
