import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { TimelinesEntryEntity } from './timelines-entry.models';
import { TimelinesEntryEffects } from './timelines-entry.effects';
import { TimelinesEntryFacade } from './timelines-entry.facade';

import * as TimelinesEntrySelectors from './timelines-entry.selectors';
import * as TimelinesEntryActions from './timelines-entry.actions';
import {
  TIMELINESENTRY_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './timelines-entry.reducer';

interface TestSchema {
  timelinesEntry: State;
}

describe('TimelinesEntryFacade', () => {
  let facade: TimelinesEntryFacade;
  let store: Store<TestSchema>;
  const createTimelinesEntryEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as TimelinesEntryEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(TIMELINESENTRY_FEATURE_KEY, reducer),
          EffectsModule.forFeature([TimelinesEntryEffects]),
        ],
        providers: [TimelinesEntryFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(TimelinesEntryFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allTimelinesEntry$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(TimelinesEntryActions.loadTimelinesEntry());

        list = await readFirst(facade.allTimelinesEntry$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadTimelinesEntrySuccess` to manually update list
     */
    it('allTimelinesEntry$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allTimelinesEntry$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          TimelinesEntryActions.loadTimelinesEntrySuccess({
            timelinesEntry: [
              createTimelinesEntryEntity('AAA'),
              createTimelinesEntryEntity('BBB'),
            ],
          })
        );

        list = await readFirst(facade.allTimelinesEntry$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
