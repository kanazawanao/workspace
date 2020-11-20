import { TimelinesEntryEntity } from './timelines-entry.models';
import * as TimelinesEntryActions from './timelines-entry.actions';
import { State, initialState, reducer } from './timelines-entry.reducer';

describe('TimelinesEntry Reducer', () => {
  const createTimelinesEntryEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as TimelinesEntryEntity);

  beforeEach(() => {});

  describe('valid TimelinesEntry actions', () => {
    it('loadTimelinesEntrySuccess should return set the list of known TimelinesEntry', () => {
      const timelinesEntry = [
        createTimelinesEntryEntity('PRODUCT-AAA'),
        createTimelinesEntryEntity('PRODUCT-zzz'),
      ];
      const action = TimelinesEntryActions.loadTimelinesEntrySuccess({
        timelinesEntry,
      });

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
