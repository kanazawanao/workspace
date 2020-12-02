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
  '[UsersEntry] Load UpdateInitSkillTypeEntry',
  props<{ skillTypeId: string }>()
);

export const loadUpdateInitSkillTypeEntrySuccess = createAction(
  '[UsersEntry] Load UpdateInitSkillTypeEntry Success',
  props<{ initSkillTypeEntry: ISkillType }>()
);

export const loadUpdateInitSkillTypeEntryFailure = createAction(
  '[UsersEntry] Load UpdateInitSkillTypeEntry Failure',
  props<{ error: any }>()
);

export const setEditerMode = createAction(
  '[UsersEntry] Set Edit Mode',
  props<{ editerMode: EditType }>()
);
