import { UsersListGuard } from './users-list.guard';
import { TestBed } from '@angular/core/testing';

describe('UsersListGuard', () => {
  let guard: UsersListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsersListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
