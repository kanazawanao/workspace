import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromSkillsEntry from './skills-entry.reducer';
import * as SkillsEntrySelectors from './skills-entry.selectors';

@Injectable()
export class SkillsEntryFacade {
  loaded$ = this.store.pipe(select(SkillsEntrySelectors.getSkillsEntryLoaded));
  allSkillsEntry$ = this.store.pipe(
    select(SkillsEntrySelectors.getAllSkillsEntry)
  );
  selectedSkillsEntry$ = this.store.pipe(
    select(SkillsEntrySelectors.getSelected)
  );

  constructor(private store: Store<fromSkillsEntry.SkillsEntryPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
