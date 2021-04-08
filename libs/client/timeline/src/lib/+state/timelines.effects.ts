import * as TimelinesActions from './timelines.actions';
import * as TimelinesFeature from './timelines.reducer';
import { TimelineService } from '../timeline.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs/operators';

@Injectable()
export class TimelinesEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TimelinesActions.loadTimelines),
      fetch({
        run: (action) => {
          return this.timelineService.fetchTimelinessInfo().pipe(
            map((res) => {
              return TimelinesActions.loadTimelinesSuccess({ timelines: res });
            })
          );
        },

        onError: (action, error) => {
          console.error('Error', error);
          return TimelinesActions.loadTimelinesFailure({ error });
        },
      })
    )
  );

  constructor(
    private actions$: Actions,
    private timelineService: TimelineService
  ) {}
}
