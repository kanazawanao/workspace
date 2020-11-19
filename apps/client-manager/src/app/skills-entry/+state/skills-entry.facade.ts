import * as SkillsEntryActions from './skills-entry.actions';
import * as fromSkillsEntry from './skills-entry.reducer';
import * as SkillsEntrySelectors from './skills-entry.selectors';
import { EditType } from '../edit-type';
import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';

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

  loadUpdateInitSkillsEntry(skillId: string) {
    this.dispatch(SkillsEntryActions.loadUpdateInitSkillEntry({ skillId }));
  }

  setEditerMode(editerMode: EditType) {
    this.store.dispatch(SkillsEntryActions.setEditerMode({ editerMode }));
  }
}
