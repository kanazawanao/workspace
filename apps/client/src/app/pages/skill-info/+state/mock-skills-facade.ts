import { Action } from '@ngrx/store';
import { of } from 'rxjs';

export class MockSkillsFacade {
  loaded$ = of();
  allSkills$ = of();
  selectedSkills$ = of();
  constructor() {}

  dispatch(action: Action) {}
}
