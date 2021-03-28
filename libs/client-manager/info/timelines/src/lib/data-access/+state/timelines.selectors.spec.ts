import { initialState, timelinesAdapter } from './timelines.reducer';
import * as TimelinesSelectors from './timelines.selectors';
import { ITimeline } from '@workspace/api-interfaces';

describe('Timelines Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getTimelinesId = (it) => it['id'];
  const createTimelinesEntity = (id: number, name = '') =>
    ({
      id,
      event: name || `name-${id}`,
    } as ITimeline);

  let state;

  beforeEach(() => {
    state = {
      timelines: timelinesAdapter.setAll(
        [
          createTimelinesEntity(1),
          createTimelinesEntity(2),
          createTimelinesEntity(3),
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

  describe('Timelines Selectors', () => {
    it('getAllTimelines() should return the list of Timelines', () => {
      const results = TimelinesSelectors.getAllTimelines(state);
      const selId = getTimelinesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe(2);
    });

    it('getSelected() should return the selected Entity', () => {
      const result = TimelinesSelectors.getSelected(state);
      const selId = getTimelinesId(result);

      expect(selId).toBe(2);
    });

    it("getTimelinesLoaded() should return the current 'loaded' status", () => {
      const result = TimelinesSelectors.getTimelinesLoaded(state);

      expect(result).toBe(true);
    });

    it("getTimelinesError() should return the current 'error' state", () => {
      const result = TimelinesSelectors.getTimelinesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
