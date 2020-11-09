import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { UsersEntryEntity } from './users-entry.models';
import { UsersEntryEffects } from './users-entry.effects';
import { UsersEntryFacade } from './users-entry.facade';

import * as UsersEntrySelectors from './users-entry.selectors';
import * as UsersEntryActions from './users-entry.actions';
import {
  USERSENTRY_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './users-entry.reducer';

interface TestSchema {
  usersEntry: State;
}

describe('UsersEntryFacade', () => {
  let facade: UsersEntryFacade;
  let store: Store<TestSchema>;
  const createUsersEntryEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as UsersEntryEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(USERSENTRY_FEATURE_KEY, reducer),
          EffectsModule.forFeature([UsersEntryEffects]),
        ],
        providers: [UsersEntryFacade],
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
      facade = TestBed.get(UsersEntryFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allUsersEntry$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(UsersEntryActions.loadUsersEntry());

        list = await readFirst(facade.allUsersEntry$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadUsersEntrySuccess` to manually update list
     */
    it('allUsersEntry$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allUsersEntry$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          UsersEntryActions.loadUsersEntrySuccess({
            usersEntry: [
              createUsersEntryEntity('AAA'),
              createUsersEntryEntity('BBB'),
            ],
          })
        );

        list = await readFirst(facade.allUsersEntry$);
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
