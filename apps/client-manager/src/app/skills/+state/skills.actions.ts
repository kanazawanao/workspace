import { createAction, props } from '@ngrx/store';
import { SkillsEntity } from './skills.models';

export const loadSkills = createAction('[Skills] Load Skills');

export const loadSkillsSuccess = createAction(
  '[Skills] Load Skills Success',
  props<{ skills: SkillsEntity[] }>()
);

export const loadSkillsFailure = createAction(
  '[Skills] Load Skills Failure',
  props<{ error: any }>()
);
