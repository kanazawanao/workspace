import { TimelinesListGuard } from './timelines-list.guard';
import { TestBed } from '@angular/core/testing';
import { TimelinesFacade } from '../+state/timelines.facade';
import { MockTimelinesFacade } from '../+state/mock-timelines.facade';

describe('TimelinesListGuard', () => {
  let guard: TimelinesListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: TimelinesFacade,
          useValue: MockTimelinesFacade,
        },
      ],
    });
    guard = TestBed.inject(TimelinesListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
