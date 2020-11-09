import { TestBed } from '@angular/core/testing';

import { UsersEntryService } from './users-entry.service';

describe('UsersEntryService', () => {
  let service: UsersEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
