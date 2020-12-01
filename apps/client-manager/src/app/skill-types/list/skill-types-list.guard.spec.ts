import { SkillTypesListGuard } from './skill-types-list.guard';
import { TestBed } from '@angular/core/testing';
import {
  SkillTypesFacade,
  MockSkillTypesFacade,
} from '@workspace/client-manager/data-accesss';

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
