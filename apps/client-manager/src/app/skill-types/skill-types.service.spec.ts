import { TestBed } from '@angular/core/testing';

import { SkillTypesService } from './skill-types.service';

describe('SkillTypesService', () => {
  let service: SkillTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
