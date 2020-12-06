import { ClientManagerEntity } from './client-manager.models';
import * as ClientManagerSelectors from './client-manager.selectors';
import {
  State,
  clientManagerAdapter,
  initialState,
} from './client-manager.reducer';

describe('ClientManager Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getClientManagerId = (it) => it['id'];
  const createClientManagerEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ClientManagerEntity);

  let state;

  beforeEach(() => {
    state = {
      clientManager: clientManagerAdapter.setAll(
        [
          createClientManagerEntity('PRODUCT-AAA'),
          createClientManagerEntity('PRODUCT-BBB'),
          createClientManagerEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('ClientManager Selectors', () => {
    it('getAllClientManager() should return the list of ClientManager', () => {
      const results = ClientManagerSelectors.getAllClientManager(state);
      const selId = getClientManagerId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = ClientManagerSelectors.getSelected(state);
      const selId = getClientManagerId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getClientManagerLoaded() should return the current 'loaded' status", () => {
      const result = ClientManagerSelectors.getClientManagerLoaded(state);

      expect(result).toBe(true);
    });

    it("getClientManagerError() should return the current 'error' state", () => {
      const result = ClientManagerSelectors.getClientManagerError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
