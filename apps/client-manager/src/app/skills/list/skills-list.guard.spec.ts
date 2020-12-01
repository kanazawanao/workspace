import { SkillsListGuard } from './skills-list.guard';
import { TestBed } from '@angular/core/testing';
import {
  SkillsFacade,
  MockSkillsFacade,
} from '@workspace/client-manager/data-accesss';

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
