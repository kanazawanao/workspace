import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromTimelinesEntry from './timelines-entry.reducer';
import * as TimelinesEntrySelectors from './timelines-entry.selectors';

@Injectable()
export class TimelinesEntryFacade {
  loaded$ = this.store.pipe(
    select(TimelinesEntrySelectors.getTimelinesEntryLoaded)
  );
  allTimelinesEntry$ = this.store.pipe(
    select(TimelinesEntrySelectors.getAllTimelinesEntry)
  );
  selectedTimelinesEntry$ = this.store.pipe(
    select(TimelinesEntrySelectors.getSelected)
  );

  constructor(
    private store: Store<fromTimelinesEntry.TimelinesEntryPartialState>
  ) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
