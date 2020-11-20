import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelinesEntryRoutingModule } from './timelines-entry-routing.module';
import { TimelinesEntryContainerComponent } from './container/timelines-entry-container.component';
import { TimelinesEntryPresenterComponent } from './presenter/timelines-entry-presenter.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromTimelinesEntry from './+state/timelines-entry.reducer';
import { TimelinesEntryEffects } from './+state/timelines-entry.effects';
import { TimelinesEntryFacade } from './+state/timelines-entry.facade';

@NgModule({
  declarations: [
    TimelinesEntryContainerComponent,
    TimelinesEntryPresenterComponent,
  ],
  imports: [
    CommonModule,
    TimelinesEntryRoutingModule,
    StoreModule.forFeature(
      fromTimelinesEntry.TIMELINESENTRY_FEATURE_KEY,
      fromTimelinesEntry.reducer
    ),
    EffectsModule.forFeature([TimelinesEntryEffects]),
  ],
  providers: [TimelinesEntryFacade],
})
export class TimelinesEntryModule {}
