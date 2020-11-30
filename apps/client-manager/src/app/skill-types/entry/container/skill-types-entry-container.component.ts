import { BaseComponent } from '../../../base/base.component';
import { SkillTypesService } from '../../skill-types.service';
import { SkillTypesEntryControlName } from '../skill-types-entry-control-name';
import { SkillTypeEntryModel } from '../skill-types-entry.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'client-manager-skill-types-entry-container',
  templateUrl: './skill-types-entry-container.component.html',
  styleUrls: ['./skill-types-entry-container.component.scss'],
})
export class SkillTypesEntryContainerComponent
  extends BaseComponent
  implements OnInit, OnDestroy {
  formGroup: FormGroup;
  controlName = SkillTypesEntryControlName;
  constructor(private skillTypesService: SkillTypesService) {
    super();
  }

  ngOnInit(): void {
    this.formGroup = this.skillTypesService.generateFormGroup();
  }
  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  regist() {}

  registSkill(skillType: SkillTypeEntryModel) {
    this.skillTypesService.postSkill(skillType);
  }
}
