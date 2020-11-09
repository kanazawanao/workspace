import { UsersEntryEntity } from './users-entry.models';
import * as UsersEntryActions from './users-entry.actions';
import { State, initialState, reducer } from './users-entry.reducer';

describe('UsersEntry Reducer', () => {
  const createUsersEntryEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as UsersEntryEntity);

  beforeEach(() => {});

  describe('valid UsersEntry actions', () => {
    it('loadUsersEntrySuccess should return set the list of known UsersEntry', () => {
      const usersEntry = [
        createUsersEntryEntity('PRODUCT-AAA'),
        createUsersEntryEntity('PRODUCT-zzz'),
      ];
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
