import { SkillsEntryEntity } from './skills-entry.models';
import {
  State,
  skillsEntryAdapter,
  initialState,
} from './skills-entry.reducer';
import * as SkillsEntrySelectors from './skills-entry.selectors';

describe('SkillsEntry Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getSkillsEntryId = (it) => it['id'];
  const createSkillsEntryEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as SkillsEntryEntity);

  let state;

  beforeEach(() => {
    state = {
      skillsEntry: skillsEntryAdapter.setAll(
        [
          createSkillsEntryEntity('PRODUCT-AAA'),
          createSkillsEntryEntity('PRODUCT-BBB'),
          createSkillsEntryEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
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
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = SkillsEntrySelectors.getSelected(state);
      const selId = getSkillsEntryId(result);

      expect(selId).toBe('PRODUCT-BBB');
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
