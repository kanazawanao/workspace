import { initialState, usersEntryAdapter } from './users-entry.reducer';
import * as UsersEntrySelectors from './users-entry.selectors';
import { IUser } from '@workspace/api-interfaces';

describe('UsersEntry Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUsersEntryId = (it) => it['id'];
  const createUsersEntryEntity = (id: number, name = '') =>
    ({
      id,
      firstName: name || `name-${id}`,
    } as IUser);

  let state;

  beforeEach(() => {
    state = {
      usersEntry: usersEntryAdapter.setAll(
        [
          createUsersEntryEntity(1),
          createUsersEntryEntity(2),
          createUsersEntryEntity(3),
        ],
        {
          ...initialState,
          selectedId: 2,
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
      expect(selId).toBe(2);
    });

    it('getSelected() should return the selected Entity', () => {
      const result = UsersEntrySelectors.getSelected(state);
      const selId = getUsersEntryId(result);

      expect(selId).toBe(2);
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
