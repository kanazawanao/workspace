import { TestBed } from '@angular/core/testing';

import { UsersEntryGuard } from './users-entry.guard';

describe('UsersEntryGuard', () => {
  let guard: UsersEntryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsersEntryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
