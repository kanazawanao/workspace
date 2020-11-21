import { TestBed } from '@angular/core/testing';

import { SkillsListGuard } from './skills-list.guard';

describe('SkillsListGuard', () => {
  let guard: SkillsListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SkillsListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
