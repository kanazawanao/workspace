import { createAction, props } from '@ngrx/store';
import { UsersEntryEntity } from './users-entry.models';

export const loadUsersEntry = createAction('[UsersEntry] Load UsersEntry');

export const loadUsersEntrySuccess = createAction(
  '[UsersEntry] Load UsersEntry Success',
  props<{ usersEntry: UsersEntryEntity[] }>()
);

export const loadUsersEntryFailure = createAction(
  '[UsersEntry] Load UsersEntry Failure',
  props<{ error: any }>()
);
