import { UsersDataAccessService } from './users-data-access.service';
import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import {
  HttpRequestService,
  MockHttpRequestService,
} from '@workspace/shared-service';

describe('UsersService', () => {
  let service: UsersDataAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersDataAccessService,
        { provide: FormBuilder, useValue: new FormBuilder() },
        {
          provide: HttpRequestService,
          useValue: MockHttpRequestService,
        },
        { provide: 'apiUrl', useValue: 'https://localhost:3333/api' },
      ],
    });
    service = TestBed.inject(UsersDataAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
