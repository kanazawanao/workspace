import { TestBed } from '@angular/core/testing';

import { SkillTypesEntryGuard } from './skill-types-entry.guard';

describe('SkillTypesEntryGuard', () => {
  let guard: SkillTypesEntryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SkillTypesEntryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
