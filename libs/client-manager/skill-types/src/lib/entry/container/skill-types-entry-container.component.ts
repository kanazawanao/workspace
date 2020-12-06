import { SkillTypeEntryModel } from '../../skill-types-entry.model';
import { SkillTypesService } from '../../skill-types.service';
import { SkillTypesEntryControlName } from '../skill-types-entry-control-name';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SkillTypesFacade } from '../../data-access/+state/skill-types.facade';

@Component({
  selector: 'client-manager-skill-types-entry-container',
  templateUrl: './skill-types-entry-container.component.html',
  styleUrls: ['./skill-types-entry-container.component.scss'],
})
export class SkillTypesEntryContainerComponent implements OnInit {
  formGroup: FormGroup;
  controlName = SkillTypesEntryControlName;
  editMode$ = this.skillTypesFacade.editMode$;
  constructor(
    private skillTypesService: SkillTypesService,
    private skillTypesFacade: SkillTypesFacade
  ) {}

  ngOnInit(): void {
    this.formGroup = this.skillTypesService.generateFormGroup();
    this.skillTypesFacade.workSkillType$.subscribe((x) => {
      if (x !== undefined) {
        this.formGroup.get(this.controlName.skillType).setValue(x.skillType);
        this.formGroup
          .get(this.controlName.skillTypeName)
          .setValue(x.skillTypeName);
      }
    });
  }

  regist() {
    var registData = new SkillTypeEntryModel();
    registData.skillType = this.formGroup.get(this.controlName.skillType).value;
    registData.skillTypeName = this.formGroup.get(
      this.controlName.skillTypeName
    ).value;
    this.skillTypesFacade.createSkillType(registData);
  }

  update() {}

  delete() {}
}
