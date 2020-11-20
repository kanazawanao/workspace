import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelinesRoutingModule } from './timelines-routing.module';
import { TimelinesPresenterComponent } from './presenter/timelines-presenter.component';
import { TimelinesContainerComponent } from './container/timelines-container.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromTimelines from './+state/timelines.reducer';
import { TimelinesEffects } from './+state/timelines.effects';
import { TimelinesFacade } from './+state/timelines.facade';

@NgModule({
  declarations: [TimelinesPresenterComponent, TimelinesContainerComponent],
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
