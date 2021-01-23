import { TestBed } from '@angular/core/testing';

import { RouteSearchService } from './route-search.service';

describe('RouteSearchService', () => {
  let service: RouteSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
