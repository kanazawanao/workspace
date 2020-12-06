import { createAction, props } from '@ngrx/store';
import { ClientManagerEntity } from './client-manager.models';

export const loadClientManager = createAction(
  '[ClientManager] Load ClientManager'
);

export const loadClientManagerSuccess = createAction(
  '[ClientManager] Load ClientManager Success',
  props<{ clientManager: ClientManagerEntity[] }>()
);

export const loadClientManagerFailure = createAction(
  '[ClientManager] Load ClientManager Failure',
  props<{ error: any }>()
);
