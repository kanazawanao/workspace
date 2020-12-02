import { TimelinesListGuard } from './timelines-list.guard';
import { TestBed } from '@angular/core/testing';
import { TimelinesFacade } from '../data-access/+state/timelines.facade';
import { MockTimelinesFacade } from '../data-access/+state/mock-timelines.facade';

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
