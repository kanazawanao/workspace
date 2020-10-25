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
