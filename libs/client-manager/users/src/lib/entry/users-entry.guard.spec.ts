import { UsersEntryGuard } from './users-entry.guard';
import { TestBed } from '@angular/core/testing';
import { MockUsersFacade } from '../data-access/+state/mock-users.facade';
import { UsersFacade } from '../data-access/+state/users.facade';

describe('UsersEntryGuard', () => {
  let guard: UsersEntryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: UsersFacade,
          useValue: MockUsersFacade,
        },
      ],
    });
    guard = TestBed.inject(UsersEntryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
