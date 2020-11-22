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

  loadUpdateInitTimelineEntry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TimelinesActions.loadUpdateInitTimelineEntry),
      fetch({
        run: (action) => {
          return this.timelinesService.fetchTimeline(action.timelineId).pipe(
            map((res) =>
              TimelinesActions.loadUpdateInitTimelineEntrySuccess({
                initTimelineEntry: res,
              })
            )
          );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return TimelinesActions.loadUpdateInitTimelineEntryFailure({ error });
        },
      })
    )
  );
  createSkill$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TimelinesActions.createTimeline),
      fetch({
        run: (action) => {
          return this.timelinesService
            .postTimeline(action.timelineEntry)
            .pipe(
              map((res) =>
                TimelinesActions.createTimelineSuccess({ timelineEntry: res })
              )
            );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return TimelinesActions.createTimelineFailure({ error });
        },
      })
    )
  );

  updateSkill$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TimelinesActions.updateTimeline),
      fetch({
        run: (action) => {
          return this.timelinesService
            .updateTimeline(action.id, action.timelineEntry)
            .pipe(
              map((res) =>
                TimelinesActions.updateTimelineSuccess({ timelineEntry: res })
              )
            );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return TimelinesActions.updateTimelineFailure({ error });
        },
      })
    )
  );

  constructor(
    private actions$: Actions,
    private timelinesService: TimelinesService
  ) {}
}
