import * as SkillsActions from './skills.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { ISkill } from '@workspace/api-interfaces';
import { EditType } from '@workspace/constants';

export const SKILLS_FEATURE_KEY = 'skills';

export interface State extends EntityState<ISkill> {
  selectedId?: number;
  loaded: boolean;
  error?: string | null;
  editerMode: EditType;
  workSkillEntry?: ISkill;
}

export interface SkillsPartialState {
  readonly [SKILLS_FEATURE_KEY]: State;
}

export const skillsAdapter: EntityAdapter<ISkill> = createEntityAdapter<
  ISkill
>();

export const initialState: State = skillsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  editerMode: EditType.create,
});

const skillsReducer = createReducer(
  initialState,
  on(SkillsActions.loadSkills, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(SkillsActions.loadSkillsSuccess, (state, { skills }) =>
    skillsAdapter.setAll(skills, { ...state, loaded: true })
  ),
  on(SkillsActions.loadSkillsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(SkillsActions.loadUpdateInitSkillEntry, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    SkillsActions.loadUpdateInitSkillEntrySuccess,
    (state, { initSkillEntry }) => ({
      ...state,
      loaded: true,
      selectedId: initSkillEntry.id,
      workSkillEntry: initSkillEntry,
    })
  ),
  on(SkillsActions.loadUpdateInitSkillEntryFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(SkillsActions.setEditerMode, (state, { editerMode }) => ({
    ...state,
    editerMode: editerMode,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return skillsReducer(state, action);
}
