import { SkillsEntryModel } from '../../skills-entry.model';
import { createAction, props } from '@ngrx/store';
import { ISkill, ISkillType } from '@workspace/api-interfaces';
import { EditType } from '@workspace/constants';
export const loadSkills = createAction('[Skills] Load Skills');

export const loadSkillsSuccess = createAction(
  '[Skills] Load Skills Success',
  props<{ skills: ISkill[] }>()
);

export const loadSkillsFailure = createAction(
  '[Skills] Load Skills Failure',
  props<{ error: any }>()
);

export const loadUpdateInitSkillEntry = createAction(
  '[UsersEntry] Load UpdateInitSkillsEntry',
  props<{ skillId: string }>()
);

export const loadUpdateInitSkillEntrySuccess = createAction(
  '[UsersEntry] Load UpdateInitSkillsEntry Success',
  props<{ initSkillEntry: ISkill }>()
);

export const loadUpdateInitSkillEntryFailure = createAction(
  '[UsersEntry] Load UpdateInitSkillsEntry Failure',
  props<{ error: any }>()
);

export const createSkill = createAction(
  '[UsersEntry] Create Skill',
  props<{ skillEntry: SkillsEntryModel }>()
);

export const createSkillSuccess = createAction(
  '[UsersEntry] Create Skill Success',
  props<{ skillEntry: ISkill }>()
);

export const createSkillFailure = createAction(
  '[UsersEntry] Create Skill Failure',
  props<{ error: any }>()
);

export const updateSkill = createAction(
  '[UsersEntry] Update Skill',
  props<{ id: number; skillEntry: SkillsEntryModel }>()
);

export const updateSkillSuccess = createAction(
  '[UsersEntry] Update Skill Success',
  props<{ skillEntry: ISkill }>()
);

export const updateSkillFailure = createAction(
  '[UsersEntry] Update Skill Failure',
  props<{ error: any }>()
);

export const setEditerMode = createAction(
  '[UsersEntry] Set Edit Mode',
  props<{ editerMode: EditType }>()
);

export const loadSkillTypes = createAction('[Skills] Load SkillTypes');

export const loadSkillTypesSuccess = createAction(
  '[Skills] Load SkillTypes Success',
  props<{ skillTypes: ISkillType[] }>()
);

export const loadSkillTypesFailure = createAction(
  '[Skills] Load SkillTypes Failure',
  props<{ error: any }>()
);
