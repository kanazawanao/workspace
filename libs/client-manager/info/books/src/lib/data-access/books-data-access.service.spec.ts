import { TestBed } from '@angular/core/testing';

import { BooksDataAccessService } from './books-data-access.service';

describe('BooksDataAccessService', () => {
  let service: BooksDataAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksDataAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
