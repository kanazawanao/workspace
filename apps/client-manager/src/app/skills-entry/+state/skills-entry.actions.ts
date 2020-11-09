import { createAction, props } from '@ngrx/store';
import { SkillsEntryEntity } from './skills-entry.models';

export const loadSkillsEntry = createAction('[SkillsEntry] Load SkillsEntry');

export const loadSkillsEntrySuccess = createAction(
  '[SkillsEntry] Load SkillsEntry Success',
  props<{ skillsEntry: SkillsEntryEntity[] }>()
);

export const loadSkillsEntryFailure = createAction(
  '[SkillsEntry] Load SkillsEntry Failure',
  props<{ error: any }>()
);
