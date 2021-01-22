import { TestBed } from '@angular/core/testing';

import { PointSearchService } from './point-search.service';

describe('PointSearchService', () => {
  let service: PointSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PointSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
