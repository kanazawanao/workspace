import * as SkillTypesActions from './skill-types.actions';
import { SkillTypeEntryModel } from '../entry/skill-types-entry.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

export const SKILL_TYPES_FEATURE_KEY = 'skillTypes';

export interface State extends EntityState<SkillTypeEntryModel> {
  selectedId?: string | number; // which SkillTypes record has been selected
  loaded: boolean; // has the SkillTypes list been loaded
  error?: string | null; // last known error (if any)
}

export interface SkillTypesPartialState {
  readonly [SKILL_TYPES_FEATURE_KEY]: State;
}

export const skillTypesAdapter: EntityAdapter<SkillTypeEntryModel> = createEntityAdapter<
  SkillTypeEntryModel
>();

export const initialState: State = skillTypesAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const skillTypesReducer = createReducer(
  initialState,
  on(SkillTypesActions.loadSkillTypes, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(SkillTypesActions.loadSkillTypesSuccess, (state, { skillTypes }) =>
    skillTypesAdapter.setAll(skillTypes, { ...state, loaded: true })
  ),
  on(SkillTypesActions.loadSkillTypesFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return skillTypesReducer(state, action);
}
