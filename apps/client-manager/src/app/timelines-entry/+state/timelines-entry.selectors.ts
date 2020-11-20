import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  TIMELINESENTRY_FEATURE_KEY,
  State,
  TimelinesEntryPartialState,
  timelinesEntryAdapter,
} from './timelines-entry.reducer';

// Lookup the 'TimelinesEntry' feature state managed by NgRx
export const getTimelinesEntryState = createFeatureSelector<
  TimelinesEntryPartialState,
  State
>(TIMELINESENTRY_FEATURE_KEY);

const { selectAll, selectEntities } = timelinesEntryAdapter.getSelectors();

export const getTimelinesEntryLoaded = createSelector(
  getTimelinesEntryState,
  (state: State) => state.loaded
);

export const getTimelinesEntryError = createSelector(
  getTimelinesEntryState,
  (state: State) => state.error
);

export const getAllTimelinesEntry = createSelector(
  getTimelinesEntryState,
  (state: State) => selectAll(state)
);

export const getTimelinesEntryEntities = createSelector(
  getTimelinesEntryState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getTimelinesEntryState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getTimelinesEntryEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
