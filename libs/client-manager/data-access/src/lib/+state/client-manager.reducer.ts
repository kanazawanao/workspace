import * as ClientManagerActions from './client-manager.actions';
import { ClientManagerEntity } from './client-manager.models';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

export const CLIENT_MANAGER_FEATURE_KEY = 'clientManager';

export interface State extends EntityState<ClientManagerEntity> {
  selectedId?: string | number; // which ClientManager record has been selected
  loaded: boolean; // has the ClientManager list been loaded
  error?: string | null; // last known error (if any)
}

export interface ClientManagerPartialState {
  readonly [CLIENT_MANAGER_FEATURE_KEY]: State;
}

export const clientManagerAdapter: EntityAdapter<ClientManagerEntity> = createEntityAdapter<
  ClientManagerEntity
>();

export const initialState: State = clientManagerAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const clientManagerReducer = createReducer(
  initialState,
  on(ClientManagerActions.loadClientManager, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    ClientManagerActions.loadClientManagerSuccess,
    (state, { clientManager }) =>
      clientManagerAdapter.setAll(clientManager, { ...state, loaded: true })
  ),
  on(ClientManagerActions.loadClientManagerFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return clientManagerReducer(state, action);
}
