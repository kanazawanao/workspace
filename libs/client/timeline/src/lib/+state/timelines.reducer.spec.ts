import { TimelinesEntity } from './timelines.models';
import * as TimelinesActions from './timelines.actions';
import { State, initialState, reducer } from './timelines.reducer';

describe('Timelines Reducer', () => {
  const createTimelinesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as TimelinesEntity);

  beforeEach(() => {});

  describe('valid Timelines actions', () => {
    it('loadTimelinesSuccess should return set the list of known Timelines', () => {
      const timelines = [
        createTimelinesEntity('PRODUCT-AAA'),
        createTimelinesEntity('PRODUCT-zzz'),
      ];
      const action = TimelinesActions.loadTimelinesSuccess({ timelines });

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
