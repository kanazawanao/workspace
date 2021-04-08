import { TimelineContainerComponent } from './container/timeline-container.component';
import { TimelinePresenterComponent } from './presenter/timeline-presenter.component';
import { TimelineRoutingModule } from './timeline-routing.module';
import { TimelineService } from './timeline.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UiTableModule } from '@workspace/ui';
import * as fromTimelines from './+state/timelines.reducer';
import { TimelinesEffects } from './+state/timelines.effects';
import { TimelinesFacade } from './+state/timelines.facade';

@NgModule({
  declarations: [TimelinePresenterComponent, TimelineContainerComponent],
  imports: [
    CommonModule,
    TimelineRoutingModule,
    UiTableModule,
    StoreModule.forFeature(
      fromTimelines.TIMELINES_FEATURE_KEY,
      fromTimelines.reducer
    ),
    EffectsModule.forFeature([TimelinesEffects]),
  ],
  providers: [TimelineService, TimelinesFacade],
})
export class TimelineModule {}
