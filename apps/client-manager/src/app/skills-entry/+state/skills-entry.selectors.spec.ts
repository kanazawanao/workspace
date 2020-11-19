import * as SkillsEntrySelectors from './skills-entry.selectors';
import { ISkill } from '@workspace/api-interfaces';
import {
  State,
  skillsEntryAdapter,
  initialState,
} from './skills-entry.reducer';

describe('SkillsEntry Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getSkillsEntryId = (it) => it['id'];
  const createSkillsEntryEntity = (id: number, name = '') =>
    ({
      id,
      skillName: name || `name-${id}`,
    } as ISkill);

  let state;

  beforeEach(() => {
    state = {
      skillsEntry: skillsEntryAdapter.setAll(
        [
          createSkillsEntryEntity(1),
          createSkillsEntryEntity(2),
          createSkillsEntryEntity(3),
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

  describe('SkillsEntry Selectors', () => {
    it('getAllSkillsEntry() should return the list of SkillsEntry', () => {
      const results = SkillsEntrySelectors.getAllSkillsEntry(state);
      const selId = getSkillsEntryId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe(2);
    });

    it('getSelected() should return the selected Entity', () => {
      const result = SkillsEntrySelectors.getSelected(state);
      const selId = getSkillsEntryId(result);

      expect(selId).toBe(2);
    });

    it("getSkillsEntryLoaded() should return the current 'loaded' status", () => {
      const result = SkillsEntrySelectors.getSkillsEntryLoaded(state);

      expect(result).toBe(true);
    });

    it("getSkillsEntryError() should return the current 'error' state", () => {
      const result = SkillsEntrySelectors.getSkillsEntryError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
