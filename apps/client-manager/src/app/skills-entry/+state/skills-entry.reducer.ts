import * as SkillsEntryActions from './skills-entry.actions';
import { SkillsEntryEntity } from './skills-entry.models';
import { EditType } from '../edit-type';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { ISkill } from '@workspace/api-interfaces';

export const SKILLSENTRY_FEATURE_KEY = 'skillsEntry';

export interface State extends EntityState<SkillsEntryEntity> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
  editerMode: EditType;
  workSkillEntry?: ISkill;
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
  editerMode: EditType.create,
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
  })),
  on(SkillsEntryActions.loadUpdateInitSkillEntry, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    SkillsEntryActions.loadUpdateInitSkillEntrySuccess,
    (state, { initSkillEntry }) => ({
      ...state,
      loaded: true,
      workSkillEntry: initSkillEntry,
    })
  ),
  on(
    SkillsEntryActions.loadUpdateInitSkillEntryFailure,
    (state, { error }) => ({
      ...state,
      error,
    })
  ),
  on(SkillsEntryActions.setEditerMode, (state, { editerMode }) => ({
    ...state,
    editerMode: editerMode,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return skillsEntryReducer(state, action);
}
