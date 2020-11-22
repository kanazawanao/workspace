import { LoginService } from './login.service';
import { TestBed } from '@angular/core/testing';
import {
  HttpRequestService,
  MockHttpRequestService,
} from '@workspace/shared-service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpRequestService,
          useValue: MockHttpRequestService,
        },
        { provide: 'apiUrl', useValue: 'https://localhost:3333/api' },
      ],
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
