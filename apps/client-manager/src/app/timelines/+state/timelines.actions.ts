import { createAction, props } from '@ngrx/store';
import { TimelinesEntity } from './timelines.models';

export const loadTimelines = createAction('[Timelines] Load Timelines');

export const loadTimelinesSuccess = createAction(
  '[Timelines] Load Timelines Success',
  props<{ timelines: TimelinesEntity[] }>()
);

export const loadTimelinesFailure = createAction(
  '[Timelines] Load Timelines Failure',
  props<{ error: any }>()
);
