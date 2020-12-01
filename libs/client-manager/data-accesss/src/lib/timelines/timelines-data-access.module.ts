import { TimelinesDataAccessService } from './timelines-data-access.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TimelinesEffects } from './+state/timelines.effects';
import { TimelinesFacade } from './+state/timelines.facade';
import * as fromTimelines from './+state/timelines.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromTimelines.TIMELINES_FEATURE_KEY,
      fromTimelines.reducer
    ),
    EffectsModule.forFeature([TimelinesEffects]),
  ],
  providers: [TimelinesFacade, TimelinesDataAccessService],
})
export class TimelinesDataAccessModule {}
