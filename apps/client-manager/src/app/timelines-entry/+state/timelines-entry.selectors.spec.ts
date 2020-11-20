import { TimelinesEntryEntity } from './timelines-entry.models';
import {
  State,
  timelinesEntryAdapter,
  initialState,
} from './timelines-entry.reducer';
import * as TimelinesEntrySelectors from './timelines-entry.selectors';

describe('TimelinesEntry Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getTimelinesEntryId = (it) => it['id'];
  const createTimelinesEntryEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as TimelinesEntryEntity);

  let state;

  beforeEach(() => {
    state = {
      timelinesEntry: timelinesEntryAdapter.setAll(
        [
          createTimelinesEntryEntity('PRODUCT-AAA'),
          createTimelinesEntryEntity('PRODUCT-BBB'),
          createTimelinesEntryEntity('PRODUCT-CCC'),
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

  describe('TimelinesEntry Selectors', () => {
    it('getAllTimelinesEntry() should return the list of TimelinesEntry', () => {
      const results = TimelinesEntrySelectors.getAllTimelinesEntry(state);
      const selId = getTimelinesEntryId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = TimelinesEntrySelectors.getSelected(state);
      const selId = getTimelinesEntryId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getTimelinesEntryLoaded() should return the current 'loaded' status", () => {
      const result = TimelinesEntrySelectors.getTimelinesEntryLoaded(state);

      expect(result).toBe(true);
    });

    it("getTimelinesEntryError() should return the current 'error' state", () => {
      const result = TimelinesEntrySelectors.getTimelinesEntryError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
