import { SkillsListGuard } from './skills-list.guard';
import { TestBed } from '@angular/core/testing';
import { SkillsFacade } from '../data-access/+state/skills.facade';
import { MockSkillsFacade } from '../data-access/+state/mock-skills.facade';

describe('SkillsListGuard', () => {
  let guard: SkillsListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: SkillsFacade,
          useValue: MockSkillsFacade,
        },
      ],
    });
    guard = TestBed.inject(SkillsListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
