import { TestBed } from '@angular/core/testing';

import { TimelinesEntryGuard } from './timelines-entry.guard';

describe('TimelinesEntryGuard', () => {
  let guard: TimelinesEntryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TimelinesEntryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
