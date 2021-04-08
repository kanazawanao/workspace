import * as TimelinesActions from './timelines.actions';
import * as TimelinesFeature from './timelines.reducer';
import * as TimelinesSelectors from './timelines.selectors';
import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';



@Injectable()
export class TimelinesFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(TimelinesSelectors.getTimelinesLoaded));
  allTimelines$ = this.store.pipe(select(TimelinesSelectors.getAllTimelines));
  selectedTimelines$ = this.store.pipe(select(TimelinesSelectors.getSelected));

  constructor(private store: Store) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  loadTimelines() {
    this.dispatch(TimelinesActions.loadTimelines());
  }
}
