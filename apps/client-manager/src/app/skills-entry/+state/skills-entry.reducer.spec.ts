import * as SkillsEntryActions from './skills-entry.actions';
import { initialState, reducer, State } from './skills-entry.reducer';
import { ISkill } from '@workspace/api-interfaces';

describe('SkillsEntry Reducer', () => {
  const createSkillsEntryEntity = (id: number, name = '') =>
    ({
      id,
      skillName: name || `name-${id}`,
    } as ISkill);

  beforeEach(() => {});

  describe('valid SkillsEntry actions', () => {
    it('loadSkillsEntrySuccess should return set the list of known SkillsEntry', () => {
      const skillsEntry = [
        createSkillsEntryEntity(1),
        createSkillsEntryEntity(2),
      ];
      const action = SkillsEntryActions.loadSkillsEntrySuccess({ skillsEntry });

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
