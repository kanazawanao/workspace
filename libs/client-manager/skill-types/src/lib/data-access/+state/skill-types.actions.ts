import { SkillTypeEntryModel } from '../../skill-types-entry.model';
import { createAction, props } from '@ngrx/store';
import { ISkillType } from '@workspace/api-interfaces';
import { EditType } from '@workspace/constants';

export const loadSkillTypes = createAction('[SkillTypes] Load SkillTypes');

export const loadSkillTypesSuccess = createAction(
  '[SkillTypes] Load SkillTypes Success',
  props<{ skillTypes: ISkillType[] }>()
);

export const loadSkillTypesFailure = createAction(
  '[SkillTypes] Load SkillTypes Failure',
  props<{ error: any }>()
);

export const loadUpdateInitSkillTypeEntry = createAction(
  '[SkillTypes] Load UpdateInitSkillTypeEntry',
  props<{ skillTypeId: string }>()
);

export const loadUpdateInitSkillTypeEntrySuccess = createAction(
  '[SkillTypes] Load UpdateInitSkillTypeEntry Success',
  props<{ initSkillTypeEntry: ISkillType }>()
);

export const loadUpdateInitSkillTypeEntryFailure = createAction(
  '[SkillTypes] Load UpdateInitSkillTypeEntry Failure',
  props<{ error: any }>()
);

export const createSkillType = createAction(
  '[SkillTypes] Create SkillType',
  props<{ skillTypeEntry: SkillTypeEntryModel }>()
);

export const createSkillTypeSuccess = createAction(
  '[SkillTypes] Create SkillType Success',
  props<{ skillTypeEntry: ISkillType }>()
);

export const createSkillTypeFailure = createAction(
  '[SkillTypes] Create SkillType Failure',
  props<{ error: any }>()
);

export const updateSkillType = createAction(
  '[SkillTypes] Update SkillType',
  props<{ id: number; skillTypeEntry: SkillTypeEntryModel }>()
);

export const updateSkillTypeSuccess = createAction(
  '[SkillTypes] Update SkillType Success',
  props<{ skillTypeEntry: ISkillType }>()
);

export const updateSkillTypeFailure = createAction(
  '[SkillTypes] Update SkillType Failure',
  props<{ error: any }>()
);

export const deleteSkillType = createAction(
  '[SkillTypes] Delete SkillType',
  props<{ id: number }>()
);

export const deleteSkillTypeSuccess = createAction(
  '[SkillTypes] Delete SkillType Success'
);

export const deleteSkillTypeFailure = createAction(
  '[SkillTypes] Delete SkillType Failure',
  props<{ error: any }>()
);

export const setEditerMode = createAction(
  '[UsersEntry] Set Edit Mode',
  props<{ editerMode: EditType }>()
);
