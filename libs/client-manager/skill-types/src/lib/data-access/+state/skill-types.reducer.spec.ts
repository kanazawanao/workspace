import * as SkillTypesActions from './skill-types.actions';
import { initialState, reducer, State } from './skill-types.reducer';
import { ISkillType } from '@workspace/api-interfaces';

describe('SkillTypes Reducer', () => {
  const createSkillTypesEntity = (id: number, name = '') =>
    ({
      id,
      skillTypeName: name || `name-${id}`,
    } as ISkillType);

  beforeEach(() => {});

  describe('valid SkillTypes actions', () => {
    it('loadSkillTypesSuccess should return set the list of known SkillTypes', () => {
      const skillTypes = [createSkillTypesEntity(1), createSkillTypesEntity(2)];
      const action = SkillTypesActions.loadSkillTypesSuccess({ skillTypes });

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
