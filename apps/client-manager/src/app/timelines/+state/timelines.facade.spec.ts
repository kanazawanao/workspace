import * as TimelinesActions from './timelines.actions';
import { TimelinesEffects } from './timelines.effects';
import { TimelinesFacade } from './timelines.facade';
import { MockTimelinesService } from '../mock-timelines.service';
import { TimelinesService } from '../timelines.service';
import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';
import { ITimeline } from '@workspace/api-interfaces';
import { TIMELINES_FEATURE_KEY, State, reducer } from './timelines.reducer';

interface TestSchema {
  timelines: State;
}

describe('TimelinesFacade', () => {
  let facade: TimelinesFacade;
  let store: Store<TestSchema>;
  const createTimelinesEntity = (id: number, name = '') =>
    ({
      id,
      event: name || `name-${id}`,
    } as ITimeline);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(TIMELINES_FEATURE_KEY, reducer),
          EffectsModule.forFeature([TimelinesEffects]),
        ],
        providers: [
          TimelinesFacade,
          { provide: TimelinesService, useValue: MockTimelinesService },
        ],
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
      facade = TestBed.get(TimelinesFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allTimelines$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(TimelinesActions.loadTimelines());

        list = await readFirst(facade.allTimelines$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadTimelinesSuccess` to manually update list
     */
    it('allTimelines$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allTimelines$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          TimelinesActions.loadTimelinesSuccess({
            timelines: [createTimelinesEntity(1), createTimelinesEntity(2)],
          })
        );

        list = await readFirst(facade.allTimelines$);
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
