import * as UsersActions from './users.actions';
import { initialState, reducer, State } from './users.reducer';
import { IUser } from '@workspace/api-interfaces';

describe('Users Reducer', () => {
  const createUsersEntity = (id: number, name = '') =>
    ({
      id,
      firstName: name,
    } as IUser);

  beforeEach(() => {});

  describe('valid Users actions', () => {
    it('loadUsersSuccess should return set the list of known Users', () => {
      const users = [createUsersEntity(1), createUsersEntity(2)];
      const action = UsersActions.loadUsersSuccess({ users });

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
