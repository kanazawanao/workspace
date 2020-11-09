import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  SKILLSENTRY_FEATURE_KEY,
  State,
  SkillsEntryPartialState,
  skillsEntryAdapter,
} from './skills-entry.reducer';

// Lookup the 'SkillsEntry' feature state managed by NgRx
export const getSkillsEntryState = createFeatureSelector<
  SkillsEntryPartialState,
  State
>(SKILLSENTRY_FEATURE_KEY);

const { selectAll, selectEntities } = skillsEntryAdapter.getSelectors();

export const getSkillsEntryLoaded = createSelector(
  getSkillsEntryState,
  (state: State) => state.loaded
);

export const getSkillsEntryError = createSelector(
  getSkillsEntryState,
  (state: State) => state.error
);

export const getAllSkillsEntry = createSelector(
  getSkillsEntryState,
  (state: State) => selectAll(state)
);

export const getSkillsEntryEntities = createSelector(
  getSkillsEntryState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getSkillsEntryState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getSkillsEntryEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
