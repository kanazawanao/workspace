import { TestBed } from '@angular/core/testing';

import { BooksListGuard } from './books-list.guard';

describe('BooksListGuard', () => {
  let guard: BooksListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BooksListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
