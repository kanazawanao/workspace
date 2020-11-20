import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { TimelinesEntryEffects } from './timelines-entry.effects';
import * as TimelinesEntryActions from './timelines-entry.actions';

describe('TimelinesEntryEffects', () => {
  let actions: Observable<any>;
  let effects: TimelinesEntryEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        TimelinesEntryEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(TimelinesEntryEffects);
  });

  describe('loadTimelinesEntry$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: TimelinesEntryActions.loadTimelinesEntry() });

      const expected = hot('-a-|', {
        a: TimelinesEntryActions.loadTimelinesEntrySuccess({
          timelinesEntry: [],
        }),
      });

      expect(effects.loadTimelinesEntry$).toBeObservable(expected);
    });
  });
});
