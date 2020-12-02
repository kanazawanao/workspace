import * as SkillTypesActions from './skill-types.actions';
import { SkillTypesEffects } from './skill-types.effects';
import { SkillTypesFacade } from './skill-types.facade';
import { reducer, SKILL_TYPES_FEATURE_KEY, State } from './skill-types.reducer';
import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';
import { ISkillType } from '@workspace/api-interfaces';

interface TestSchema {
  skillTypes: State;
}

describe('SkillTypesFacade', () => {
  let facade: SkillTypesFacade;
  let store: Store<TestSchema>;
  const createSkillTypesEntity = (id: number, name = '') =>
    ({
      id,
      skillType: 0,
      skillTypeName: name || `name-${id}`,
    } as ISkillType);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(SKILL_TYPES_FEATURE_KEY, reducer),
          EffectsModule.forFeature([SkillTypesEffects]),
        ],
        providers: [SkillTypesFacade],
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

      store = TestBed.inject(Store);
      facade = TestBed.inject(SkillTypesFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allSkillTypes$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(SkillTypesActions.loadSkillTypes());

        list = await readFirst(facade.allSkillTypes$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadSkillTypesSuccess` to manually update list
     */
    it('allSkillTypes$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allSkillTypes$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          SkillTypesActions.loadSkillTypesSuccess({
            skillTypes: [createSkillTypesEntity(1), createSkillTypesEntity(2)],
          })
        );

        list = await readFirst(facade.allSkillTypes$);
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
