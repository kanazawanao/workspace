import { createAction, props } from '@ngrx/store';
import { ITimeline } from '@workspace/api-interfaces';

export const loadTimelines = createAction('[Timelines Page] Init');

export const loadTimelinesSuccess = createAction(
  '[Timelines/API] Load Timelines Success',
  props<{ timelines: ITimeline[] }>()
);

export const loadTimelinesFailure = createAction(
  '[Timelines/API] Load Timelines Failure',
  props<{ error: any }>()
);
