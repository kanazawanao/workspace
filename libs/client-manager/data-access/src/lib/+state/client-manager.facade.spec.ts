import * as ClientManagerActions from './client-manager.actions';
import { ClientManagerEffects } from './client-manager.effects';
import { ClientManagerFacade } from './client-manager.facade';
import { ClientManagerEntity } from './client-manager.models';
import * as ClientManagerSelectors from './client-manager.selectors';
import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';
import {
  CLIENT_MANAGER_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './client-manager.reducer';

interface TestSchema {
  clientManager: State;
}

describe('ClientManagerFacade', () => {
  let facade: ClientManagerFacade;
  let store: Store<TestSchema>;
  const createClientManagerEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ClientManagerEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(CLIENT_MANAGER_FEATURE_KEY, reducer),
          EffectsModule.forFeature([ClientManagerEffects]),
        ],
        providers: [ClientManagerFacade],
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
      facade = TestBed.get(ClientManagerFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allClientManager$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(ClientManagerActions.loadClientManager());

        list = await readFirst(facade.allClientManager$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadClientManagerSuccess` to manually update list
     */
    it('allClientManager$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allClientManager$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          ClientManagerActions.loadClientManagerSuccess({
            clientManager: [
              createClientManagerEntity('AAA'),
              createClientManagerEntity('BBB'),
            ],
          })
        );

        list = await readFirst(facade.allClientManager$);
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
