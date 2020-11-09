import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  USERSENTRY_FEATURE_KEY,
  State,
  UsersEntryPartialState,
  usersEntryAdapter,
} from './users-entry.reducer';

// Lookup the 'UsersEntry' feature state managed by NgRx
export const getUsersEntryState = createFeatureSelector<
  UsersEntryPartialState,
  State
>(USERSENTRY_FEATURE_KEY);

const { selectAll, selectEntities } = usersEntryAdapter.getSelectors();

export const getUsersEntryLoaded = createSelector(
  getUsersEntryState,
  (state: State) => state.loaded
);

export const getUsersEntryError = createSelector(
  getUsersEntryState,
  (state: State) => state.error
);

export const getAllUsersEntry = createSelector(
  getUsersEntryState,
  (state: State) => selectAll(state)
);

export const getUsersEntryEntities = createSelector(
  getUsersEntryState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getUsersEntryState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getUsersEntryEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
