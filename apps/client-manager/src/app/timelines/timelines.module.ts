import { TimelinesRoutingModule } from './timelines-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import * as fromTimelines from './+state/timelines.reducer';
import { TimelinesEffects } from './+state/timelines.effects';
import { TimelinesFacade } from './+state/timelines.facade';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TimelinesRoutingModule,
    StoreModule.forFeature(
      fromTimelines.TIMELINES_FEATURE_KEY,
      fromTimelines.reducer
    ),
    EffectsModule.forFeature([TimelinesEffects]),
  ],
  providers: [TimelinesFacade],
})
export class TimelinesModule {}
