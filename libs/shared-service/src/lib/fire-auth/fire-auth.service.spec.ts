import { FireAuthService } from './fire-auth.service';
import { TestBed } from '@angular/core/testing';

describe('FireAuthService', () => {
  let service: FireAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireAuthService],
    });
    service = TestBed.inject(FireAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
