import { SkillsService } from './skills.service';
import { TestBed } from '@angular/core/testing';
import {
  HttpRequestService,
  MockHttpRequestService,
} from '@workspace/shared-service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

describe('SkillsService', () => {
  let service: SkillsService;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SkillsService,
        {
          provide: HttpRequestService,
          useValue: MockHttpRequestService,
        },
        { provide: FormBuilder, useValue: new FormBuilder() },
        { provide: Router, useValue: mockRouter },
      ],
    });
    service = TestBed.inject(SkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
