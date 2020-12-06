import * as ClientManagerActions from './client-manager.actions';
import { ClientManagerEntity } from './client-manager.models';
import { initialState, reducer, State } from './client-manager.reducer';

describe('ClientManager Reducer', () => {
  const createClientManagerEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ClientManagerEntity);

  beforeEach(() => {});

  describe('valid ClientManager actions', () => {
    it('loadClientManagerSuccess should return set the list of known ClientManager', () => {
      const clientManager = [
        createClientManagerEntity('PRODUCT-AAA'),
        createClientManagerEntity('PRODUCT-zzz'),
      ];
      const action = ClientManagerActions.loadClientManagerSuccess({
        clientManager,
      });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
