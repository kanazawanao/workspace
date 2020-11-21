import { createAction, props } from '@ngrx/store';
import { ITimeline } from '@workspace/api-interfaces';

export const loadTimelines = createAction('[Timelines] Load Timelines');

export const loadTimelinesSuccess = createAction(
  '[Timelines] Load Timelines Success',
  props<{ timelines: ITimeline[] }>()
);

export const loadTimelinesFailure = createAction(
  '[Timelines] Load Timelines Failure',
  props<{ error: any }>()
);
