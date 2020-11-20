import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { TimelinesEffects } from './timelines.effects';
import * as TimelinesActions from './timelines.actions';

describe('TimelinesEffects', () => {
  let actions: Observable<any>;
  let effects: TimelinesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        TimelinesEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(TimelinesEffects);
  });

  describe('loadTimelines$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: TimelinesActions.loadTimelines() });

      const expected = hot('-a-|', {
        a: TimelinesActions.loadTimelinesSuccess({ timelines: [] }),
      });

      expect(effects.loadTimelines$).toBeObservable(expected);
    });
  });
});
