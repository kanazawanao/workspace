import { TimelinesDataAccessService } from './timelines-data-access.service';
import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import {
  HttpRequestService,
  MockHttpRequestService,
} from '@workspace/shared-service';

describe('TimelinesService', () => {
  let service: TimelinesDataAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TimelinesDataAccessService,
        { provide: FormBuilder, useValue: new FormBuilder() },
        {
          provide: HttpRequestService,
          useValue: MockHttpRequestService,
        },
        { provide: 'apiUrl', useValue: 'https://localhost:3333/api' },
      ],
    });
    service = TestBed.inject(TimelinesDataAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
