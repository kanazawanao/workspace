import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromTimelines from './timelines.reducer';
import * as TimelinesSelectors from './timelines.selectors';

@Injectable()
export class TimelinesFacade {
  loaded$ = this.store.pipe(select(TimelinesSelectors.getTimelinesLoaded));
  allTimelines$ = this.store.pipe(select(TimelinesSelectors.getAllTimelines));
  selectedTimelines$ = this.store.pipe(select(TimelinesSelectors.getSelected));

  constructor(private store: Store<fromTimelines.TimelinesPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
