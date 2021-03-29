import { TestBed } from '@angular/core/testing';

import { BooksEntryGuard } from './books-entry.guard';

describe('BooksEntryGuard', () => {
  let guard: BooksEntryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BooksEntryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
