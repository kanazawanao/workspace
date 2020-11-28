import { initialState, skillTypesAdapter, State } from './skill-types.reducer';
import * as SkillTypesSelectors from './skill-types.selectors';
import { SkillTypeEntryModel } from '../entry/skill-types-entry.model';

describe('SkillTypes Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getSkillTypesId = (it) => it['id'];
  const createSkillTypesEntity = (id: number, name = '') =>
    ({
      id,
      skillType: 0,
      skillTypeName: name || `name-${id}`,
    } as SkillTypeEntryModel);

  let state;

  beforeEach(() => {
    state = {
      skillTypes: skillTypesAdapter.setAll(
        [
          createSkillTypesEntity(1),
          createSkillTypesEntity(2),
          createSkillTypesEntity(3),
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

  describe('SkillTypes Selectors', () => {
    it('getAllSkillTypes() should return the list of SkillTypes', () => {
      const results = SkillTypesSelectors.getAllSkillTypes(state);
      const selId = getSkillTypesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe(2);
    });

    it('getSelected() should return the selected Entity', () => {
      const result = SkillTypesSelectors.getSelected(state);
      const selId = getSkillTypesId(result);

      expect(selId).toBe(2);
    });

    it("getSkillTypesLoaded() should return the current 'loaded' status", () => {
      const result = SkillTypesSelectors.getSkillTypesLoaded(state);

      expect(result).toBe(true);
    });

    it("getSkillTypesError() should return the current 'error' state", () => {
      const result = SkillTypesSelectors.getSkillTypesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
