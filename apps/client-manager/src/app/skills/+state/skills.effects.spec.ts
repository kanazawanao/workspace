import * as SkillsActions from './skills.actions';
import { SkillsEffects } from './skills.effects';
import { MockSkillsService } from '../mock-skills.service';
import { skillsData } from '../skills.data';
import { SkillsService } from '../skills.service';
import { async, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { DataPersistence, NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

describe('SkillsEffects', () => {
  let actions: Observable<any>;
  let effects: SkillsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        SkillsEffects,
        DataPersistence,
        {
          provide: SkillsService,
          useClass: MockSkillsService,
        },
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(SkillsEffects);
  });

  describe('loadSkills$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: SkillsActions.loadSkills() });

      const expected = hot('-a-|', {
        a: SkillsActions.loadSkillsSuccess({ skills: skillsData }),
      });

      expect(effects.loadSkills$).toBeObservable(expected);
    });
  });
});
