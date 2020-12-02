import { SkillsEntryGuard } from './skills-entry.guard';
import { TestBed } from '@angular/core/testing';
import { SkillsFacade } from '../data-access/+state/skills.facade';
import { MockSkillsFacade } from '../data-access/+state/mock-skills.facade';

describe('SkillsEntryGuard', () => {
  let guard: SkillsEntryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: SkillsFacade,
          useValue: MockSkillsFacade,
        },
      ],
    });
    guard = TestBed.inject(SkillsEntryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
