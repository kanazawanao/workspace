import { EditType } from '../../skills/edit-type';
import { createAction, props } from '@ngrx/store';
import { IUser } from '@workspace/api-interfaces';

export const loadUsers = createAction('[Users] Load Users');

export const loadUsersSuccess = createAction(
  '[Users] Load Users Success',
  props<{ users: IUser[] }>()
);

export const loadUsersFailure = createAction(
  '[Users] Load Users Failure',
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
