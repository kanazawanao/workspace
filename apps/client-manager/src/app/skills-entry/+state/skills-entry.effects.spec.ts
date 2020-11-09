import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { SkillsEntryEffects } from './skills-entry.effects';
import * as SkillsEntryActions from './skills-entry.actions';

describe('SkillsEntryEffects', () => {
  let actions: Observable<any>;
  let effects: SkillsEntryEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        SkillsEntryEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(SkillsEntryEffects);
  });

  describe('loadSkillsEntry$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: SkillsEntryActions.loadSkillsEntry() });

      const expected = hot('-a-|', {
        a: SkillsEntryActions.loadSkillsEntrySuccess({ skillsEntry: [] }),
      });

      expect(effects.loadSkillsEntry$).toBeObservable(expected);
    });
  });
});
