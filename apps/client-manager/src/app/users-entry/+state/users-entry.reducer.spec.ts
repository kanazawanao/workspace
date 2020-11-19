import * as UsersEntryActions from './users-entry.actions';
import { initialState, reducer, State } from './users-entry.reducer';
import { IUser } from '@workspace/api-interfaces';

describe('UsersEntry Reducer', () => {
  const createUsersEntryEntity = (id: number, name = '') =>
    ({
      id,
      firstName: name || `name-${id}`,
    } as IUser);

  beforeEach(() => {});

  describe('valid UsersEntry actions', () => {
    it('loadUsersEntrySuccess should return set the list of known UsersEntry', () => {
      const usersEntry = [createUsersEntryEntity(1), createUsersEntryEntity(2)];
      const action = UsersEntryActions.loadUsersEntrySuccess({ usersEntry });

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
