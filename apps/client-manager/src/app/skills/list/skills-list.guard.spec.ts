import { SkillsListGuard } from './skills-list.guard';
import { TestBed } from '@angular/core/testing';
import { MockSkillsFacade } from '../+state/mock-skills.facade';
import { SkillsFacade } from '../+state/skills.facade';

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
