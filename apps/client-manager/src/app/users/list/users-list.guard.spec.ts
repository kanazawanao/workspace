import { UsersListGuard } from './users-list.guard';
import { TestBed } from '@angular/core/testing';
import { UsersFacade } from '../+state/users.facade';
import { MockUsersFacade } from '../+state/mock-users.facade';
describe('UsersListGuard', () => {
  let guard: UsersListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
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
