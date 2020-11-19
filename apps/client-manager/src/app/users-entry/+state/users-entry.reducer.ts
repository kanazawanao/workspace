import * as UsersEntryActions from './users-entry.actions';
import { EditType } from '../edit-type';
import { Icu } from '@angular/compiler/src/i18n/i18n_ast';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { IUser } from '@workspace/api-interfaces';

export const USERSENTRY_FEATURE_KEY = 'usersEntry';

export interface State extends EntityState<IUser> {
  selectedId?: string | number; // which UsersEntry record has been selected
  loaded: boolean; // has the UsersEntry list been loaded
  error?: string | null; // last known error (if any)
  editerMode: EditType;
  workUserEntry?: IUser;
}

export interface UsersEntryPartialState {
  readonly [USERSENTRY_FEATURE_KEY]: State;
}

export const usersEntryAdapter: EntityAdapter<IUser> = createEntityAdapter<
  IUser
>();

export const initialState: State = usersEntryAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  editerMode: EditType.create,
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
  })),
  on(UsersEntryActions.loadUpdateInitUserEntry, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    UsersEntryActions.loadUpdateInitUserEntrySuccess,
    (state, { initUserEntry }) => ({
      ...state,
      loaded: true,
      workUserEntry: initUserEntry,
    })
  ),
  on(UsersEntryActions.loadUpdateInitUserEntryFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(UsersEntryActions.setEditerMode, (state, { editerMode }) => ({
    ...state,
    editerMode: editerMode,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return usersEntryReducer(state, action);
}
