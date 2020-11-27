import { SkillTypesService } from './skill-types.service';
import { TestBed } from '@angular/core/testing';

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
