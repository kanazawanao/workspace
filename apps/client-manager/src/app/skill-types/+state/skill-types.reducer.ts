import * as SkillTypesActions from './skill-types.actions';
import { SkillTypeEntryModel } from '../entry/skill-types-entry.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { ISkillType } from '@workspace/api-interfaces';
import { EditType } from '@workspace/constants';

export const SKILL_TYPES_FEATURE_KEY = 'skillTypes';

export interface State extends EntityState<ISkillType> {
  selectedId?: string | number; // which SkillTypes record has been selected
  loaded: boolean; // has the SkillTypes list been loaded
  error?: string | null; // last known error (if any)
  editerMode: EditType;
  workSkillTypeEntry?: ISkillType;
}

export interface SkillTypesPartialState {
  readonly [SKILL_TYPES_FEATURE_KEY]: State;
}

export const skillTypesAdapter: EntityAdapter<ISkillType> = createEntityAdapter<
  ISkillType
>();

export const initialState: State = skillTypesAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  editerMode: EditType.create,
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
  })),
  on(SkillTypesActions.loadUpdateInitSkillTypeEntry, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    SkillTypesActions.loadUpdateInitSkillTypeEntrySuccess,
    (state, { initSkillTypeEntry }) => ({
      ...state,
      loaded: true,
      selectedId: initSkillTypeEntry.id,
      workSkillTypeEntry: initSkillTypeEntry,
    })
  ),
  on(
    SkillTypesActions.loadUpdateInitSkillTypeEntryFailure,
    (state, { error }) => ({
      ...state,
      error,
    })
  ),
  on(SkillTypesActions.setEditerMode, (state, { editerMode }) => ({
    ...state,
    editerMode: editerMode,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return skillTypesReducer(state, action);
}
