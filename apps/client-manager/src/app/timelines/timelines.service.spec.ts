import { TimelinesService } from './timelines.service';
import { TestBed } from '@angular/core/testing';
import {
  HttpRequestService,
  MockHttpRequestService,
} from '@workspace/shared-service';

describe('TimelinesService', () => {
  let service: TimelinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TimelinesService,
        {
          provide: HttpRequestService,
          useValue: MockHttpRequestService,
        },
        { provide: 'apiUrl', useValue: 'https://localhost:3333/api' },
      ],
    });
    service = TestBed.inject(TimelinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
