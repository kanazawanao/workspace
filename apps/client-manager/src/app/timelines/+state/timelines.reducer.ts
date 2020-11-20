import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as TimelinesActions from './timelines.actions';
import { TimelinesEntity } from './timelines.models';

export const TIMELINES_FEATURE_KEY = 'timelines';

export interface State extends EntityState<TimelinesEntity> {
  selectedId?: string | number; // which Timelines record has been selected
  loaded: boolean; // has the Timelines list been loaded
  error?: string | null; // last known error (if any)
}

export interface TimelinesPartialState {
  readonly [TIMELINES_FEATURE_KEY]: State;
}

export const timelinesAdapter: EntityAdapter<TimelinesEntity> = createEntityAdapter<
  TimelinesEntity
>();

export const initialState: State = timelinesAdapter.getInitialState({
  // set initial required properties
  loaded: false,
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
