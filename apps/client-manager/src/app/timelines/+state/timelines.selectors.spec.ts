import { TimelinesEntity } from './timelines.models';
import { State, timelinesAdapter, initialState } from './timelines.reducer';
import * as TimelinesSelectors from './timelines.selectors';

describe('Timelines Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getTimelinesId = (it) => it['id'];
  const createTimelinesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as TimelinesEntity);

  let state;

  beforeEach(() => {
    state = {
      timelines: timelinesAdapter.setAll(
        [
          createTimelinesEntity('PRODUCT-AAA'),
          createTimelinesEntity('PRODUCT-BBB'),
          createTimelinesEntity('PRODUCT-CCC'),
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

  describe('Timelines Selectors', () => {
    it('getAllTimelines() should return the list of Timelines', () => {
      const results = TimelinesSelectors.getAllTimelines(state);
      const selId = getTimelinesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = TimelinesSelectors.getSelected(state);
      const selId = getTimelinesId(result);

      expect(selId).toBe('PRODUCT-BBB');
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
