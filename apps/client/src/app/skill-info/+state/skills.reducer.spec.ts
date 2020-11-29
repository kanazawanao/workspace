import * as SkillsActions from './skills.actions';
import { initialState, reducer, State } from './skills.reducer';
import { ISkill } from '@workspace/api-interfaces';

describe('Skills Reducer', () => {
  const createSkills = (
    id: number,
    skillType: string,
    skillName: string,
    experienceYears: number,
    skillLevel: number
  ) =>
    ({
      id,
      skillType,
      skillName,
      experienceYears,
      skillLevel,
    } as ISkill);

  beforeEach(() => {});

  describe('valid Skills actions', () => {
    it('loadSkillsSuccess should return set the list of known Skills', () => {
      const skills = [
        createSkills(1, 'PRODUCT-AAA', '', 2, 3),
        createSkills(2, 'PRODUCT-zzz', '', 3, 3),
      ];
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
