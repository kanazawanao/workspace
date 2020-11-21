import { TestBed } from '@angular/core/testing';

import { TimelinesListGuard } from './timelines-list.guard';

describe('TimelinesListGuard', () => {
  let guard: TimelinesListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TimelinesListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
