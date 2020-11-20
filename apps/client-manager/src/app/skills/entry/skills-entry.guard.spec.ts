import { TestBed } from '@angular/core/testing';

import { SkillsEntryGuard } from './skills-entry.guard';

describe('SkillsEntryGuard', () => {
  let guard: SkillsEntryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SkillsEntryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
