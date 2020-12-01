import { TimelinesEntryGuard } from './timelines-entry.guard';
import { TestBed } from '@angular/core/testing';
import {
  TimelinesFacade,
  MockTimelinesFacade,
} from '@workspace/client-manager/data-accesss';

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
