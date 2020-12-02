import * as SkillTypesActions from './skill-types.actions';
import * as fromSkillTypes from './skill-types.reducer';
import * as SkillTypesSelectors from './skill-types.selectors';
import { SkillTypeEntryModel } from '../../skill-types-entry.model';
import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { EditType } from '@workspace/constants';

@Injectable()
export class SkillTypesFacade {
  loaded$ = this.store.pipe(select(SkillTypesSelectors.getSkillTypesLoaded));
  allSkillTypes$ = this.store.pipe(
    select(SkillTypesSelectors.getAllSkillTypes)
  );
  selectedSkillTypes$ = this.store.pipe(
    select(SkillTypesSelectors.getSelected)
  );
  workSkillType$ = this.store.pipe(
    select(SkillTypesSelectors.getWorkSkillEntry)
  );
  editMode$ = this.store.pipe(select(SkillTypesSelectors.getEditerMode));

  constructor(private store: Store<fromSkillTypes.SkillTypesPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  loadSkillTypes() {
    this.dispatch(SkillTypesActions.loadSkillTypes());
  }

  loadUpdateInitSkillTypeEntry(skillTypeId: string) {
    this.setEditerMode(EditType.update);
    this.dispatch(
      SkillTypesActions.loadUpdateInitSkillTypeEntry({ skillTypeId })
    );
  }

  createSkill(skillTypeEntry: SkillTypeEntryModel) {
    this.dispatch(SkillTypesActions.createSkillType({ skillTypeEntry }));
  }

  updateSkill(id: number, skillTypeEntry: SkillTypeEntryModel) {
    this.dispatch(SkillTypesActions.updateSkillType({ id, skillTypeEntry }));
  }

  deleteSkill(id: number) {
    this.dispatch(SkillTypesActions.deleteSkillType({ id }));
  }

  setEditerMode(editerMode: EditType) {
    this.store.dispatch(SkillTypesActions.setEditerMode({ editerMode }));
  }
}
