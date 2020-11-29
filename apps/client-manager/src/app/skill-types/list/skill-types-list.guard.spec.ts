import { SkillTypesListGuard } from './skill-types-list.guard';
import { TestBed } from '@angular/core/testing';
import { MockSkillTypesFacade } from '../+state/mock-skill-types.facade';
import { SkillTypesFacade } from '../+state/skill-types.facade';


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
