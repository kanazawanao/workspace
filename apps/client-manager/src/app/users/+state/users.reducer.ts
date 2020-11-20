import * as UsersActions from './users.actions';
import { EditType } from '../../skills/edit-type';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { IUser } from '@workspace/api-interfaces';

export const USERS_FEATURE_KEY = 'users';

export interface State extends EntityState<IUser> {
  selectedId?: string | number; // which Users record has been selected
  loaded: boolean; // has the Users list been loaded
  error?: string | null; // last known error (if any)
  editerMode: EditType;
  workUserEntry?: IUser;
}

export interface UsersPartialState {
  readonly [USERS_FEATURE_KEY]: State;
}

export const usersAdapter: EntityAdapter<IUser> = createEntityAdapter<IUser>();

export const initialState: State = usersAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  editerMode: EditType.create,
});

const usersReducer = createReducer(
  initialState,
  on(UsersActions.loadUsers, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(UsersActions.loadUsersSuccess, (state, { users }) =>
    usersAdapter.setAll(users, { ...state, loaded: true })
  ),
  on(UsersActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(UsersActions.loadUpdateInitUserEntry, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    UsersActions.loadUpdateInitUserEntrySuccess,
    (state, { initUserEntry }) => ({
      ...state,
      loaded: true,
      workUserEntry: initUserEntry,
    })
  ),
  on(UsersActions.loadUpdateInitUserEntryFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(UsersActions.setEditerMode, (state, { editerMode }) => ({
    ...state,
    editerMode: editerMode,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return usersReducer(state, action);
}
