import { SkillTypesService } from './skill-types.service';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

describe('SkillTypesService', () => {
  let service: SkillTypesService;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SkillTypesService,
        { provide: FormBuilder, useValue: new FormBuilder() },
        { provide: Router, useValue: mockRouter },
      ],
    });
    service = TestBed.inject(SkillTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
