import { PointSearchService } from './point-search.service';
import { TestBed } from '@angular/core/testing';

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
