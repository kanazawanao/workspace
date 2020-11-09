import { UsersEntryEntity } from './users-entry.models';
import { State, usersEntryAdapter, initialState } from './users-entry.reducer';
import * as UsersEntrySelectors from './users-entry.selectors';

describe('UsersEntry Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUsersEntryId = (it) => it['id'];
  const createUsersEntryEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as UsersEntryEntity);

  let state;

  beforeEach(() => {
    state = {
      usersEntry: usersEntryAdapter.setAll(
        [
          createUsersEntryEntity('PRODUCT-AAA'),
          createUsersEntryEntity('PRODUCT-BBB'),
          createUsersEntryEntity('PRODUCT-CCC'),
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

  describe('UsersEntry Selectors', () => {
    it('getAllUsersEntry() should return the list of UsersEntry', () => {
      const results = UsersEntrySelectors.getAllUsersEntry(state);
      const selId = getUsersEntryId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = UsersEntrySelectors.getSelected(state);
      const selId = getUsersEntryId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getUsersEntryLoaded() should return the current 'loaded' status", () => {
      const result = UsersEntrySelectors.getUsersEntryLoaded(state);

      expect(result).toBe(true);
    });

    it("getUsersEntryError() should return the current 'error' state", () => {
      const result = UsersEntrySelectors.getUsersEntryError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
