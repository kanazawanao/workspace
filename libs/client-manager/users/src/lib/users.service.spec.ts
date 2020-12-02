import { UsersService } from './users.service';
import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import {
  HttpRequestService,
  MockHttpRequestService,
} from '@workspace/shared-service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersService,
        { provide: FormBuilder, useValue: new FormBuilder() },
        {
          provide: HttpRequestService,
          useValue: MockHttpRequestService,
        },
        { provide: 'apiUrl', useValue: 'https://localhost:3333/api' },
      ],
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
