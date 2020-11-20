import { EditType } from '../edit-type';
import { createAction, props } from '@ngrx/store';
import { ISkill } from '@workspace/api-interfaces';
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

export const setEditerMode = createAction(
  '[UsersEntry] Set Edit Mode',
  props<{ editerMode: EditType }>()
);
