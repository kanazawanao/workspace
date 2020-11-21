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

export const setEditerMode = createAction(
  '[UsersEntry] Set Edit Mode',
  props<{ editerMode: EditType }>()
);
