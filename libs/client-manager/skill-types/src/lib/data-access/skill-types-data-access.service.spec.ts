import { SkillTypesDataAccessService } from './skill-types-data-access.service';
import { TestBed } from '@angular/core/testing';

describe('SkillTypesDataAccessService', () => {
  let service: SkillTypesDataAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillTypesDataAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
