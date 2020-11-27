import { TestBed } from '@angular/core/testing';

import { SkillTypesListGuard } from './skill-types-list.guard';

describe('SkillTypesListGuard', () => {
  let guard: SkillTypesListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SkillTypesListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
