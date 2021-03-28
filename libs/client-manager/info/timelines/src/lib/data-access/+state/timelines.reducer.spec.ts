import * as TimelinesActions from './timelines.actions';
import { initialState, reducer, State } from './timelines.reducer';
import { ITimeline } from '@workspace/api-interfaces';

describe('Timelines Reducer', () => {
  const createTimelinesEntity = (id: number, name = '') =>
    ({
      id,
      event: name || `name-${id}`,
    } as ITimeline);

  beforeEach(() => {});

  describe('valid Timelines actions', () => {
    it('loadTimelinesSuccess should return set the list of known Timelines', () => {
      const timelines = [createTimelinesEntity(1), createTimelinesEntity(2)];
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
