import { TimelinesEntryModel } from '../entry/timelines-entry.model';
import { createAction, props } from '@ngrx/store';
import { ITimeline } from '@workspace/api-interfaces';
import { EditType } from '@workspace/constants';

export const loadTimelines = createAction('[Timelines] Load Timelines');

export const loadTimelinesSuccess = createAction(
  '[Timelines] Load Timelines Success',
  props<{ timelines: ITimeline[] }>()
);

export const loadTimelinesFailure = createAction(
  '[Timelines] Load Timelines Failure',
  props<{ error: any }>()
);

export const loadUpdateInitTimelineEntry = createAction(
  '[UsersEntry] Load UpdateInitTimelineEntry',
  props<{ timelineId: string }>()
);

export const loadUpdateInitTimelineEntrySuccess = createAction(
  '[UsersEntry] Load UpdateInitTimelineEntry Success',
  props<{ initTimelineEntry: ITimeline }>()
);

export const loadUpdateInitTimelineEntryFailure = createAction(
  '[UsersEntry] Load UpdateInitTimelineEntry Failure',
  props<{ error: any }>()
);

export const createTimeline = createAction(
  '[UsersEntry] Create Timeline',
  props<{ timelineEntry: TimelinesEntryModel }>()
);

export const createTimelineSuccess = createAction(
  '[UsersEntry] Create Timeline Success',
  props<{ timelineEntry: ITimeline }>()
);

export const createTimelineFailure = createAction(
  '[UsersEntry] Create Timeline Failure',
  props<{ error: any }>()
);

export const updateTimeline = createAction(
  '[UsersEntry] Update Timeline',
  props<{ id: number; timelineEntry: TimelinesEntryModel }>()
);

export const updateTimelineSuccess = createAction(
  '[UsersEntry] Update Timeline Success',
  props<{ timelineEntry: ITimeline }>()
);

export const updateTimelineFailure = createAction(
  '[UsersEntry] Update Timeline Failure',
  props<{ error: any }>()
);

export const setEditerMode = createAction(
  '[UsersEntry] Set Edit Mode',
  props<{ editerMode: EditType }>()
);
