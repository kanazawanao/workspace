import * as SkillsActions from './skills.actions';
import { initialState, reducer, State } from './skills.reducer';
import { ISkill } from '@workspace/api-interfaces';

describe('Skills Reducer', () => {
  const createSkillsEntity = (id: number, name = '') =>
    ({
      id,
      skillType: 1,
      skillName: '',
      experienceYears: 1,
      skillLevel: 1,
    } as ISkill);

  beforeEach(() => {});

  describe('valid Skills actions', () => {
    it('loadSkillsSuccess should return set the list of known Skills', () => {
      const skills = [createSkillsEntity(1), createSkillsEntity(2)];
      const action = SkillsActions.loadSkillsSuccess({ skills });

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
