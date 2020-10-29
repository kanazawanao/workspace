import { AboutModule } from './about.module';
import { AboutService } from './about.service';
import { TestBed } from '@angular/core/testing';
import {
  HttpRequestService,
  MockHttpRequestService,
} from '@workspace/shared-service';

describe('AboutService', () => {
  let service: AboutService;
  let httpRequestService: HttpRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AboutService,
        { provide: HttpRequestService, useClass: MockHttpRequestService },
        { provide: 'apiUrl', useValue: 'https://localhost:5001/api' },
      ],
    });
    service = TestBed.inject(AboutService);
    httpRequestService = TestBed.inject(HttpRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
