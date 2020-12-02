import { TimelinesEntryModel } from '../../timelines-entry.model';
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
  '[Timelines] Load UpdateInitTimelineEntry',
  props<{ timelineId: string }>()
);

export const loadUpdateInitTimelineEntrySuccess = createAction(
  '[Timelines] Load UpdateInitTimelineEntry Success',
  props<{ initTimelineEntry: ITimeline }>()
);

export const loadUpdateInitTimelineEntryFailure = createAction(
  '[Timelines] Load UpdateInitTimelineEntry Failure',
  props<{ error: any }>()
);

export const createTimeline = createAction(
  '[Timelines] Create Timeline',
  props<{ timelineEntry: TimelinesEntryModel }>()
);

export const createTimelineSuccess = createAction(
  '[Timelines] Create Timeline Success',
  props<{ timelineEntry: ITimeline }>()
);

export const createTimelineFailure = createAction(
  '[Timelines] Create Timeline Failure',
  props<{ error: any }>()
);

export const updateTimeline = createAction(
  '[Timelines] Update Timeline',
  props<{ id: number; timelineEntry: TimelinesEntryModel }>()
);

export const updateTimelineSuccess = createAction(
  '[Timelines] Update Timeline Success',
  props<{ timelineEntry: ITimeline }>()
);

export const updateTimelineFailure = createAction(
  '[Timelines] Update Timeline Failure',
  props<{ error: any }>()
);

export const deleteTimeline = createAction(
  '[Timelines] Delete Timeline',
  props<{ id: number }>()
);

export const deleteTimelineSuccess = createAction(
  '[Timelines] Delete Timeline Success'
);

export const deleteTimelineFailure = createAction(
  '[Timelines] Delete Timeline Failure',
  props<{ error: any }>()
);

export const setEditerMode = createAction(
  '[Timelines] Set Edit Mode',
  props<{ editerMode: EditType }>()
);
