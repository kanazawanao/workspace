import { createAction, props } from '@ngrx/store';
import { TimelinesEntryEntity } from './timelines-entry.models';

export const loadTimelinesEntry = createAction(
  '[TimelinesEntry] Load TimelinesEntry'
);

export const loadTimelinesEntrySuccess = createAction(
  '[TimelinesEntry] Load TimelinesEntry Success',
  props<{ timelinesEntry: TimelinesEntryEntity[] }>()
);

export const loadTimelinesEntryFailure = createAction(
  '[TimelinesEntry] Load TimelinesEntry Failure',
  props<{ error: any }>()
);
