import { TimelinesEntryGuard } from './timelines-entry.guard';
import { TestBed } from '@angular/core/testing';
import { MockTimelinesFacade } from '../data-access/+state/mock-timelines.facade';
import { TimelinesFacade } from '../data-access/+state/timelines.facade';

describe('TimelinesEntryGuard', () => {
  let guard: TimelinesEntryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: TimelinesFacade,
          useValue: MockTimelinesFacade,
        },
      ],
    });
    guard = TestBed.inject(TimelinesEntryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
