import { SkillTypesEntryGuard } from './skill-types-entry.guard';
import { TestBed } from '@angular/core/testing';
import {
  SkillTypesFacade,
  MockSkillTypesFacade,
} from '@workspace/client-manager/data-accesss';
describe('SkillTypesEntryGuard', () => {
  let guard: SkillTypesEntryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
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
