import { initialState, skillsAdapter, State } from './skills.reducer';
import * as SkillsSelectors from './skills.selectors';
import { ISkill } from '@workspace/api-interfaces';

describe('Skills Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getSkillsId = (it) => it['id'];
  const createSkillsEntity = (id: number, name = '') =>
    ({
      id,
      skillName: name || `name-${id}`,
    } as ISkill);

  let state;

  beforeEach(() => {
    state = {
      skills: skillsAdapter.setAll(
        [createSkillsEntity(1), createSkillsEntity(2), createSkillsEntity(3)],
        {
          ...initialState,
          selectedId: 1,
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Skills Selectors', () => {
    it('getAllSkills() should return the list of Skills', () => {
      const results = SkillsSelectors.getAllSkills(state);
      const selId = getSkillsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe(2);
    });

    it('getSelected() should return the selected Entity', () => {
      const result = SkillsSelectors.getSelected(state);
      const selId = getSkillsId(result);

      expect(selId).toBe(1);
    });

    it("getSkillsLoaded() should return the current 'loaded' status", () => {
      const result = SkillsSelectors.getSkillsLoaded(state);

      expect(result).toBe(true);
    });

    it("getSkillsError() should return the current 'error' state", () => {
      const result = SkillsSelectors.getSkillsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
