import { EditType } from '../edit-type';
import { createAction, props } from '@ngrx/store';
import { ISkill } from '@workspace/api-interfaces';

export const loadSkillsEntry = createAction('[SkillsEntry] Load SkillsEntry');

export const loadSkillsEntrySuccess = createAction(
  '[SkillsEntry] Load SkillsEntry Success',
  props<{ skillsEntry: ISkill[] }>()
);

export const loadSkillsEntryFailure = createAction(
  '[SkillsEntry] Load SkillsEntry Failure',
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
