import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  TIMELINES_FEATURE_KEY,
  State,
  TimelinesPartialState,
  timelinesAdapter,
} from './timelines.reducer';

// Lookup the 'Timelines' feature state managed by NgRx
export const getTimelinesState = createFeatureSelector<
  TimelinesPartialState,
  State
>(TIMELINES_FEATURE_KEY);

const { selectAll, selectEntities } = timelinesAdapter.getSelectors();

export const getTimelinesLoaded = createSelector(
  getTimelinesState,
  (state: State) => state.loaded
);

export const getTimelinesError = createSelector(
  getTimelinesState,
  (state: State) => state.error
);

export const getAllTimelines = createSelector(
  getTimelinesState,
  (state: State) => selectAll(state)
);

export const getTimelinesEntities = createSelector(
  getTimelinesState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getTimelinesState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getTimelinesEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
