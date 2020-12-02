import * as SkillsActions from './skills.actions';
import * as fromSkills from './skills.reducer';
import * as SkillsSelectors from './skills.selectors';
import { SkillsEntryModel } from '../../skills-entry.model';
import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { EditType } from '@workspace/constants';

@Injectable()
export class SkillsFacade {
  loaded$ = this.store.pipe(select(SkillsSelectors.getSkillsLoaded));
  allSkills$ = this.store.pipe(select(SkillsSelectors.getAllSkills));
  selectedSkills$ = this.store.pipe(select(SkillsSelectors.getSelected));
  workSkill$ = this.store.pipe(select(SkillsSelectors.getWorkSkillEntry));
  editMode$ = this.store.pipe(select(SkillsSelectors.getEditerMode));
  skillTypes$ = this.store.pipe(select(SkillsSelectors.getSkillTypes));

  constructor(private store: Store<fromSkills.SkillsPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  loadSkills() {
    this.dispatch(SkillsActions.loadSkills());
  }

  loadUpdateInitSkillsEntry(skillId: string) {
    this.setEditerMode(EditType.update);
    this.dispatch(SkillsActions.loadUpdateInitSkillEntry({ skillId }));
  }

  createSkill(skillEntry: SkillsEntryModel) {
    this.dispatch(SkillsActions.createSkill({ skillEntry }));
  }

  updateSkill(id: number, skillEntry: SkillsEntryModel) {
    this.dispatch(SkillsActions.updateSkill({ id, skillEntry }));
  }

  setEditerMode(editerMode: EditType) {
    this.store.dispatch(SkillsActions.setEditerMode({ editerMode }));
  }

  loadSkillTypes() {
    this.dispatch(SkillsActions.loadSkillTypes());
  }
}
