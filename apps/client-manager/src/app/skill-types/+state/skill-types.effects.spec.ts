import * as SkillTypesActions from './skill-types.actions';
import { SkillTypesEffects } from './skill-types.effects';
import { async, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { DataPersistence, NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

describe('SkillTypesEffects', () => {
  let actions: Observable<any>;
  let effects: SkillTypesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        SkillTypesEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(SkillTypesEffects);
  });

  describe('loadSkillTypes$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: SkillTypesActions.loadSkillTypes() });

      const expected = hot('-a-|', {
        a: SkillTypesActions.loadSkillTypesSuccess({ skillTypes: [] }),
      });

      expect(effects.loadSkillTypes$).toBeObservable(expected);
    });
  });
});
