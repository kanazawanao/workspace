import { SkillTypesListGuard } from './skill-types-list.guard';
import { TestBed } from '@angular/core/testing';
import { SkillTypesFacade } from '../data-access/+state/skill-types.facade';
import { MockSkillTypesFacade } from '../data-access/+state/mock-skill-types.facade';
describe('SkillTypesListGuard', () => {
  let guard: SkillTypesListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: SkillTypesFacade,
          useValue: MockSkillTypesFacade,
        },
      ],
    });
    guard = TestBed.inject(SkillTypesListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
