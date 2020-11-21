import { TinelinesEntryContainerComponent } from './container/tinelines-entry-container.component';
import { TinelinesEntryPresenterComponent } from './presenter/tinelines-entry-presenter.component';
import { TimelinesEntryRoutingModule } from './timelines-entry-routing.module';
import { TimelinesEntryGuard } from './timelines-entry.guard';
import { TimelinesService } from '../timelines.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromTimelines from '../+state/timelines.reducer';
import { TimelinesEffects } from '../+state/timelines.effects';
import { TimelinesFacade } from '../+state/timelines.facade';

@NgModule({
  declarations: [
    TinelinesEntryPresenterComponent,
    TinelinesEntryContainerComponent,
  ],
  imports: [
    CommonModule,
    TimelinesEntryRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(
      fromTimelines.TIMELINES_FEATURE_KEY,
      fromTimelines.reducer
    ),
    EffectsModule.forFeature([TimelinesEffects]),
  ],
  providers: [TimelinesFacade, TimelinesEntryGuard, TimelinesService],
})
export class TimelinesEntryModule {}
