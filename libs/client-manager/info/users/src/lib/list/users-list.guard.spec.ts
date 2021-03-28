import { UsersListGuard } from './users-list.guard';
import { TestBed } from '@angular/core/testing';
import { UsersFacade } from '../data-access/+state/users.facade';
import { MockUsersFacade } from '../data-access/+state/mock-users.facade';

describe('UsersListGuard', () => {
  let guard: UsersListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersListGuard,
        {
          provide: UsersFacade,
          useValue: MockUsersFacade,
        },
      ],
    });
    guard = TestBed.inject(UsersListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
