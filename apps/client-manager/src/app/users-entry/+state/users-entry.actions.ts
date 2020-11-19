import { EditType } from '../edit-type';
import { createAction, props } from '@ngrx/store';
import { IUser } from '@workspace/api-interfaces';

export const loadUsersEntry = createAction('[UsersEntry] Load UsersEntry');

export const loadUsersEntrySuccess = createAction(
  '[UsersEntry] Load UsersEntry Success',
  props<{ usersEntry: IUser[] }>()
);

export const loadUsersEntryFailure = createAction(
  '[UsersEntry] Load UsersEntry Failure',
  props<{ error: any }>()
);

export const loadUpdateInitUserEntry = createAction(
  '[UsersEntry] Load UpdateInitUsersEntry',
  props<{ userId: string }>()
);

export const loadUpdateInitUserEntrySuccess = createAction(
  '[UsersEntry] Load UpdateInitUsersEntry Success',
  props<{ initUserEntry: IUser }>()
);

export const loadUpdateInitUserEntryFailure = createAction(
  '[UsersEntry] Load UpdateInitUsersEntry Failure',
  props<{ error: any }>()
);

export const setEditerMode = createAction(
  '[UsersEntry] Set Edit Mode',
  props<{ editerMode: EditType }>()
);
