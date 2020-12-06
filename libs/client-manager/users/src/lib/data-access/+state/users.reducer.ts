import * as UsersActions from './users.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { IUser } from '@workspace/api-interfaces';
import { EditType } from '@workspace/constants';

export const USERS_FEATURE_KEY = 'users';

export interface State extends EntityState<IUser> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
  editerMode: EditType;
  workUserEntry?: IUser;
}

export interface UsersPartialState {
  readonly [USERS_FEATURE_KEY]: State;
}

export const usersAdapter: EntityAdapter<IUser> = createEntityAdapter<IUser>();

export const initialState: State = usersAdapter.getInitialState({
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
      selectedId: initUserEntry.id,
    })
  ),
  on(UsersActions.loadUpdateInitUserEntryFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(UsersActions.createUser, (state) => ({
    ...state,
    loaded: false,
  })),
  on(UsersActions.createUserSuccess, (state) => ({
    ...state,
    loaded: true,
  })),
  on(UsersActions.createUserFailure, (state, { error }) => ({
    ...state,
    loaded: true,
    error,
  })),
  on(UsersActions.updateUser, (state) => ({
    ...state,
    loaded: false,
  })),
  on(UsersActions.updateUserSuccess, (state) => ({
    ...state,
    loaded: true,
  })),
  on(UsersActions.updateUserFailure, (state, { error }) => ({
    ...state,
    loaded: true,
    error,
  })),
  on(UsersActions.deleteUser, (state) => ({
    ...state,
    loaded: false,
  })),
  on(UsersActions.deleteUserSuccess, (state) => ({
    ...state,
    loaded: true,
  })),
  on(UsersActions.deleteUserFailure, (state, { error }) => ({
    ...state,
    loaded: true,
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
