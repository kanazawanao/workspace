import * as UsersEntryActions from './users-entry.actions';
import { UsersEntryEntity } from './users-entry.models';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { IUser } from '@workspace/api-interfaces';


export const USERSENTRY_FEATURE_KEY = 'usersEntry';

export interface State extends EntityState<UsersEntryEntity> {
  selectedId?: string | number; // which UsersEntry record has been selected
  loaded: boolean; // has the UsersEntry list been loaded
  error?: string | null; // last known error (if any)
  workUserEntry?: IUser;
}

export interface UsersEntryPartialState {
  readonly [USERSENTRY_FEATURE_KEY]: State;
}

export const usersEntryAdapter: EntityAdapter<UsersEntryEntity> = createEntityAdapter<
  UsersEntryEntity
>();

export const initialState: State = usersEntryAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const usersEntryReducer = createReducer(
  initialState,
  on(UsersEntryActions.loadUsersEntry, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(UsersEntryActions.loadUsersEntrySuccess, (state, { usersEntry }) =>
    usersEntryAdapter.setAll(usersEntry, { ...state, loaded: true })
  ),
  on(UsersEntryActions.loadUsersEntryFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return usersEntryReducer(state, action);
}
