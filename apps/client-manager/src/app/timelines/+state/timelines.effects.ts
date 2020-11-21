import * as TimelinesActions from './timelines.actions';
import { TimelinesService } from '../timelines.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs/operators';

@Injectable()
export class TimelinesEffects {
  loadTimelines$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TimelinesActions.loadTimelines),
      fetch({
        run: (action) => {
          return this.timelinesService
            .fetchTimelines()
            .pipe(
              map((res) =>
                TimelinesActions.loadTimelinesSuccess({ timelines: res })
              )
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
    private timelinesService: TimelinesService
  ) {}
}
