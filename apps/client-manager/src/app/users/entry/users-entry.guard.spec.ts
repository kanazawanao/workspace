import { UsersEntryGuard } from './users-entry.guard';
import { TestBed } from '@angular/core/testing';
import {
  UsersFacade,
  MockUsersFacade,
} from '@workspace/client-manager/data-accesss';

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
