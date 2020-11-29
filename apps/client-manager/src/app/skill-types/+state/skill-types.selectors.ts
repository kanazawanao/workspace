import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  SKILL_TYPES_FEATURE_KEY,
  State,
  SkillTypesPartialState,
  skillTypesAdapter,
} from './skill-types.reducer';

export const getSkillTypesState = createFeatureSelector<
  SkillTypesPartialState,
  State
>(SKILL_TYPES_FEATURE_KEY);

const { selectAll, selectEntities } = skillTypesAdapter.getSelectors();

export const getSkillTypesLoaded = createSelector(
  getSkillTypesState,
  (state: State) => state.loaded
);

export const getSkillTypesError = createSelector(
  getSkillTypesState,
  (state: State) => state.error
);

export const getAllSkillTypes = createSelector(
  getSkillTypesState,
  (state: State) => selectAll(state)
);

export const getSkillTypesEntities = createSelector(
  getSkillTypesState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getSkillTypesState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getSkillTypesEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

export const getWorkSkillEntry = createSelector(
  getSkillTypesState,
  (state: State) => state.workSkillTypeEntry
);

export const getEditerMode = createSelector(
  getSkillTypesState,
  (state: State) => state.editerMode
);
