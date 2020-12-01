import { UsersListGuard } from './users-list.guard';
import { TestBed } from '@angular/core/testing';
import {
  UsersFacade,
  MockUsersFacade,
} from '@workspace/client-manager/data-accesss';
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
