import { SkillTypesEntryGuard } from './skill-types-entry.guard';
import { TestBed } from '@angular/core/testing';
import { MockSkillTypesFacade } from '../data-access/+state/mock-skill-types.facade';
import { SkillTypesFacade } from '../data-access/+state/skill-types.facade';

describe('SkillTypesEntryGuard', () => {
  let guard: SkillTypesEntryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SkillTypesEntryGuard,
        {
          provide: SkillTypesFacade,
          useValue: MockSkillTypesFacade,
        },
      ],
    });
    guard = TestBed.inject(SkillTypesEntryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
