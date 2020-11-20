import * as SkillsActions from './skills.actions';
import * as fromSkills from './skills.reducer';
import * as SkillsSelectors from './skills.selectors';
import { EditType } from '../edit-type';
import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';

@Injectable()
export class SkillsFacade {
  loaded$ = this.store.pipe(select(SkillsSelectors.getSkillsLoaded));
  allSkills$ = this.store.pipe(select(SkillsSelectors.getAllSkills));
  selectedSkills$ = this.store.pipe(select(SkillsSelectors.getSelected));

  constructor(private store: Store<fromSkills.SkillsPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  loadUpdateInitSkillsEntry(skillId: string) {
    this.dispatch(SkillsActions.loadUpdateInitSkillEntry({ skillId }));
  }

  setEditerMode(editerMode: EditType) {
    this.store.dispatch(SkillsActions.setEditerMode({ editerMode }));
  }
}
