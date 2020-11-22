import * as SkillsActions from './skills.actions';
import { SkillsEffects } from './skills.effects';
import { SkillsFacade } from './skills.facade';
import { reducer, SKILLS_FEATURE_KEY, State } from './skills.reducer';
import { MockSkillsService } from '../mock-skills.service';
import { SkillsService } from '../skills.service';
import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';
import { ISkill } from '@workspace/api-interfaces';

interface TestSchema {
  skills: State;
}

describe('SkillsFacade', () => {
  let facade: SkillsFacade;
  let store: Store<TestSchema>;
  const createSkillsEntity = (id: number, name = '') =>
    ({
      id,
      skillName: name || `name-${id}`,
    } as ISkill);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(SKILLS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([SkillsEffects]),
        ],
        providers: [
          SkillsFacade,
          { provide: SkillsService, useValue: MockSkillsService },
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

      store = TestBed.inject(Store);
      facade = TestBed.inject(SkillsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allSkills$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(SkillsActions.loadSkills());

        list = await readFirst(facade.allSkills$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadSkillsSuccess` to manually update list
     */
    it('allSkills$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allSkills$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          SkillsActions.loadSkillsSuccess({
            skills: [createSkillsEntity(1), createSkillsEntity(2)],
          })
        );

        list = await readFirst(facade.allSkills$);
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
