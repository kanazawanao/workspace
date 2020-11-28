import { SkillTypeEntryModel } from '../entry/skill-types-entry.model';
import { createAction, props } from '@ngrx/store';
export const loadSkillTypes = createAction('[SkillTypes] Load SkillTypes');

export const loadSkillTypesSuccess = createAction(
  '[SkillTypes] Load SkillTypes Success',
  props<{ skillTypes: SkillTypeEntryModel[] }>()
);

export const loadSkillTypesFailure = createAction(
  '[SkillTypes] Load SkillTypes Failure',
  props<{ error: any }>()
);
