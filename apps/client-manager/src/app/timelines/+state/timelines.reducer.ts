import * as TimelinesActions from './timelines.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { ITimeline } from '@workspace/api-interfaces';
import { EditType } from '@workspace/constants';

export const TIMELINES_FEATURE_KEY = 'timelines';

export interface State extends EntityState<ITimeline> {
  selectedId?: string | number; // which Timelines record has been selected
  loaded: boolean; // has the Timelines list been loaded
  error?: string | null; // last known error (if any)
  editerMode: EditType;
  workUserEntry?: ITimeline;
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
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return timelinesReducer(state, action);
}
