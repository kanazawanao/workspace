import * as TimelinesActions from './timelines.actions';
import { TimelinesEffects } from './timelines.effects';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { DataPersistence, NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';
import { TimelinesDataAccessService } from '../timelines-data-access.service';
import { MockTimelinesDataAccessService } from '../mock-timelines-data-access.service';
import { timelinesData } from '../timelines.data';

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
        {
          provide: TimelinesDataAccessService,
          useClass: MockTimelinesDataAccessService,
        },
      ],
    });

    effects = TestBed.inject(TimelinesEffects);
  });

  describe('loadTimelines$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: TimelinesActions.loadTimelines() });

      const expected = hot('-a-|', {
        a: TimelinesActions.loadTimelinesSuccess({ timelines: timelinesData }),
      });

      expect(effects.loadTimelines$).toBeObservable(expected);
    });
  });
});
