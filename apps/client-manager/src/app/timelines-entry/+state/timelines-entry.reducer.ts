import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as TimelinesEntryActions from './timelines-entry.actions';
import { TimelinesEntryEntity } from './timelines-entry.models';

export const TIMELINESENTRY_FEATURE_KEY = 'timelinesEntry';

export interface State extends EntityState<TimelinesEntryEntity> {
  selectedId?: string | number; // which TimelinesEntry record has been selected
  loaded: boolean; // has the TimelinesEntry list been loaded
  error?: string | null; // last known error (if any)
}

export interface TimelinesEntryPartialState {
  readonly [TIMELINESENTRY_FEATURE_KEY]: State;
}

export const timelinesEntryAdapter: EntityAdapter<TimelinesEntryEntity> = createEntityAdapter<
  TimelinesEntryEntity
>();

export const initialState: State = timelinesEntryAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const timelinesEntryReducer = createReducer(
  initialState,
  on(TimelinesEntryActions.loadTimelinesEntry, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    TimelinesEntryActions.loadTimelinesEntrySuccess,
    (state, { timelinesEntry }) =>
      timelinesEntryAdapter.setAll(timelinesEntry, { ...state, loaded: true })
  ),
  on(TimelinesEntryActions.loadTimelinesEntryFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return timelinesEntryReducer(state, action);
}
