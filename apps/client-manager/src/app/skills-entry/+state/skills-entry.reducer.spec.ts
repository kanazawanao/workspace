import { SkillsEntryEntity } from './skills-entry.models';
import * as SkillsEntryActions from './skills-entry.actions';
import { State, initialState, reducer } from './skills-entry.reducer';

describe('SkillsEntry Reducer', () => {
  const createSkillsEntryEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as SkillsEntryEntity);

  beforeEach(() => {});

  describe('valid SkillsEntry actions', () => {
    it('loadSkillsEntrySuccess should return set the list of known SkillsEntry', () => {
      const skillsEntry = [
        createSkillsEntryEntity('PRODUCT-AAA'),
        createSkillsEntryEntity('PRODUCT-zzz'),
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
