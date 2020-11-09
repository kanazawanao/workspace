import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromSkills from './skills.reducer';
import * as SkillsSelectors from './skills.selectors';

@Injectable()
export class SkillsFacade {
  loaded$ = this.store.pipe(select(SkillsSelectors.getSkillsLoaded));
  allSkills$ = this.store.pipe(select(SkillsSelectors.getAllSkills));
  selectedSkills$ = this.store.pipe(select(SkillsSelectors.getSelected));

  constructor(private store: Store<fromSkills.SkillsPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
