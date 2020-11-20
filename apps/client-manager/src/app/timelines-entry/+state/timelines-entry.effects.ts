import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromTimelinesEntry from './timelines-entry.reducer';
import * as TimelinesEntryActions from './timelines-entry.actions';

@Injectable()
export class TimelinesEntryEffects {
  loadTimelinesEntry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TimelinesEntryActions.loadTimelinesEntry),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return TimelinesEntryActions.loadTimelinesEntrySuccess({
            timelinesEntry: [],
          });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return TimelinesEntryActions.loadTimelinesEntryFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
