import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as SkillsEntryActions from './skills-entry.actions';
import { SkillsEntryEntity } from './skills-entry.models';

export const SKILLSENTRY_FEATURE_KEY = 'skillsEntry';

export interface State extends EntityState<SkillsEntryEntity> {
  selectedId?: string | number; // which SkillsEntry record has been selected
  loaded: boolean; // has the SkillsEntry list been loaded
  error?: string | null; // last known error (if any)
}

export interface SkillsEntryPartialState {
  readonly [SKILLSENTRY_FEATURE_KEY]: State;
}

export const skillsEntryAdapter: EntityAdapter<SkillsEntryEntity> = createEntityAdapter<
  SkillsEntryEntity
>();

export const initialState: State = skillsEntryAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const skillsEntryReducer = createReducer(
  initialState,
  on(SkillsEntryActions.loadSkillsEntry, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(SkillsEntryActions.loadSkillsEntrySuccess, (state, { skillsEntry }) =>
    skillsEntryAdapter.setAll(skillsEntry, { ...state, loaded: true })
  ),
  on(SkillsEntryActions.loadSkillsEntryFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return skillsEntryReducer(state, action);
}
