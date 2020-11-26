import { initialState, State, usersAdapter } from './users.reducer';
import * as UsersSelectors from './users.selectors';
import { IUser } from '@workspace/api-interfaces';

describe('Users Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUsersId = (it) => it['id'];
  const createUsersEntity = (id: number, name = '') =>
    ({
      id,
      firstName: name || `name-${id}`,
    } as IUser);

  let state;

  beforeEach(() => {
    state = {
      users: usersAdapter.setAll(
        [createUsersEntity(1), createUsersEntity(2), createUsersEntity(3)],
        {
          ...initialState,
          selectedId: 2,
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Users Selectors', () => {
    it('getAllUsers() should return the list of Users', () => {
      const results = UsersSelectors.getAllUsers(state);
      const selId = getUsersId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe(2);
    });

    it('getSelected() should return the selected Entity', () => {
      const result = UsersSelectors.getSelected(state);
      const selId = getUsersId(result);

      expect(selId).toBe(2);
    });

    it("getUsersLoaded() should return the current 'loaded' status", () => {
      const result = UsersSelectors.getUsersLoaded(state);

      expect(result).toBe(true);
    });

    it("getUsersError() should return the current 'error' state", () => {
      const result = UsersSelectors.getUsersError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
