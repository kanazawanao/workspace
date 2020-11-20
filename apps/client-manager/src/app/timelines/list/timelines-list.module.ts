import { TinelinesListContainerComponent } from './container/tinelines-list-container.component';
import { TinelinesListPresenterComponent } from './presenter/tinelines-list-presenter.component';
import { TimelinesListRoutingModule } from './timelines-list-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromTimelines from '../+state/timelines.reducer';
import { TimelinesEffects } from '../+state/timelines.effects';
import { TimelinesFacade } from '../+state/timelines.facade';

@NgModule({
  declarations: [
    TinelinesListPresenterComponent,
    TinelinesListContainerComponent,
  ],
  imports: [
    CommonModule,
    TimelinesListRoutingModule,
    StoreModule.forFeature(
      fromTimelines.TIMELINES_FEATURE_KEY,
      fromTimelines.reducer
    ),
    EffectsModule.forFeature([TimelinesEffects]),
  ],
  providers: [TimelinesFacade],
})
export class TimelinesListModule {}
