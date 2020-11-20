import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromTimelines from './timelines.reducer';
import * as TimelinesActions from './timelines.actions';

@Injectable()
export class TimelinesEffects {
  loadTimelines$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TimelinesActions.loadTimelines),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return TimelinesActions.loadTimelinesSuccess({ timelines: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return TimelinesActions.loadTimelinesFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
