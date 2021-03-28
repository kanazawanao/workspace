import { TimelinesService } from './timelines.service';
import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

describe('TimelinesService', () => {
  let service: TimelinesService;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate'),
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TimelinesService,
        { provide: FormBuilder, useValue: new FormBuilder() },
        { provide: Router, useValue: mockRouter },
      ],
    });
    service = TestBed.inject(TimelinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
