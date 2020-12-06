import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CLIENT_MANAGER_FEATURE_KEY,
  State,
  ClientManagerPartialState,
  clientManagerAdapter,
} from './client-manager.reducer';

// Lookup the 'ClientManager' feature state managed by NgRx
export const getClientManagerState = createFeatureSelector<
  ClientManagerPartialState,
  State
>(CLIENT_MANAGER_FEATURE_KEY);

const { selectAll, selectEntities } = clientManagerAdapter.getSelectors();

export const getClientManagerLoaded = createSelector(
  getClientManagerState,
  (state: State) => state.loaded
);

export const getClientManagerError = createSelector(
  getClientManagerState,
  (state: State) => state.error
);

export const getAllClientManager = createSelector(
  getClientManagerState,
  (state: State) => selectAll(state)
);

export const getClientManagerEntities = createSelector(
  getClientManagerState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getClientManagerState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getClientManagerEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
