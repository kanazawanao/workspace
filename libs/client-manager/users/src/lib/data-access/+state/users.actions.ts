import { UsersEntryModel } from '../../users-entry.model';
import { createAction, props } from '@ngrx/store';
import { IUser } from '@workspace/api-interfaces';
import { EditType } from '@workspace/constants';

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
export const createUser = createAction(
  '[UsersEntry] Create User',
  props<{ userEntry: UsersEntryModel }>()
);

export const createUserSuccess = createAction(
  '[UsersEntry] Create User Success',
  props<{ userEntry: IUser }>()
);

export const createUserFailure = createAction(
  '[UsersEntry] Create User Failure',
  props<{ error: any }>()
);

export const updateUser = createAction(
  '[UsersEntry] Update User',
  props<{ id: number; userEntry: UsersEntryModel }>()
);

export const updateUserSuccess = createAction(
  '[UsersEntry] Update User Success',
  props<{ userEntry: IUser }>()
);

export const updateUserFailure = createAction(
  '[UsersEntry] Update User Failure',
  props<{ error: any }>()
);

export const deleteUser = createAction(
  '[UsersEntry] Delete User',
  props<{ id: number }>()
);

export const deleteUserSuccess = createAction(
  '[UsersEntry] Delete User Success'
);

export const deleteUserFailure = createAction(
  '[UsersEntry] Delete User Failure',
  props<{ error: any }>()
);

export const setEditerMode = createAction(
  '[UsersEntry] Set Edit Mode',
  props<{ editerMode: EditType }>()
);
