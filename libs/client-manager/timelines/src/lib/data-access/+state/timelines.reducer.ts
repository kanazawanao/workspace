import * as TimelinesActions from './timelines.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { ITimeline } from '@workspace/api-interfaces';
import { EditType } from '@workspace/constants';

export const TIMELINES_FEATURE_KEY = 'timelines';

export interface State extends EntityState<ITimeline> {
  selectedId?: number;
  loaded: boolean;
  error?: string | null;
  editerMode: EditType;
  workTimelineEntry?: ITimeline;
}

export interface TimelinesPartialState {
  readonly [TIMELINES_FEATURE_KEY]: State;
}

export const timelinesAdapter: EntityAdapter<ITimeline> = createEntityAdapter<
  ITimeline
>();

export const initialState: State = timelinesAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  editerMode: EditType.create,
});

const timelinesReducer = createReducer(
  initialState,
  on(TimelinesActions.loadTimelines, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(TimelinesActions.loadTimelinesSuccess, (state, { timelines }) =>
    timelinesAdapter.setAll(timelines, { ...state, loaded: true })
  ),
  on(TimelinesActions.loadTimelinesFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(TimelinesActions.loadUpdateInitTimelineEntry, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    TimelinesActions.loadUpdateInitTimelineEntrySuccess,
    (state, { initTimelineEntry }) => ({
      ...state,
      loaded: true,
      workTimelineEntry: initTimelineEntry,
    })
  ),
  on(
    TimelinesActions.loadUpdateInitTimelineEntryFailure,
    (state, { error }) => ({
      ...state,
      error,
    })
  ),
  on(TimelinesActions.createTimeline, (state) => ({
    ...state,
    loaded: false,
  })),
  on(TimelinesActions.createTimelineSuccess, (state) => ({
    ...state,
    loaded: true,
  })),
  on(TimelinesActions.createTimelineFailure, (state, { error }) => ({
    ...state,
    loaded: true,
    error,
  })),
  on(TimelinesActions.updateTimeline, (state) => ({
    ...state,
    loaded: false,
  })),
  on(TimelinesActions.updateTimelineSuccess, (state) => ({
    ...state,
    loaded: true,
  })),
  on(TimelinesActions.updateTimelineFailure, (state, { error }) => ({
    ...state,
    loaded: true,
    error,
  })),
  on(TimelinesActions.deleteTimeline, (state) => ({
    ...state,
    loaded: false,
  })),
  on(TimelinesActions.deleteTimelineSuccess, (state) => ({
    ...state,
    loaded: true,
  })),
  on(TimelinesActions.deleteTimelineFailure, (state, { error }) => ({
    ...state,
    loaded: true,
    error,
  })),
  on(TimelinesActions.setEditerMode, (state, { editerMode }) => ({
    ...state,
    editerMode: editerMode,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return timelinesReducer(state, action);
}
