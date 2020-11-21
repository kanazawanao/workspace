import { TimelinesListContainerComponent } from './container/timelines-list-container.component';
import { TimelinesListPresenterComponent } from './presenter/timelines-list-presenter.component';
import { TimelinesListRoutingModule } from './timelines-list-routing.module';
import { TimelinesListGuard } from './timelines-list.guard';
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
    TimelinesListPresenterComponent,
    TimelinesListContainerComponent,
  ],
  imports: [
    CommonModule,
    TimelinesListRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(
      fromTimelines.TIMELINES_FEATURE_KEY,
      fromTimelines.reducer
    ),
    EffectsModule.forFeature([TimelinesEffects]),
  ],
  providers: [TimelinesFacade, TimelinesListGuard, TimelinesService],
})
export class TimelinesListModule {}
