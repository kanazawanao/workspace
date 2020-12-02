import { SkillsService } from '../../skills.service';
import { SkillsEntryControlName } from '../skills-entry-control-name';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SkillsEntryModel } from '@workspace/client-manager/models';
import { SelectOption } from '@workspace/ui';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { SkillsFacade } from '../../data-access/+state/skills.facade';

@Component({
  selector: 'client-manager-skills-entry-container',
  templateUrl: './skills-entry-container.component.html',
  styleUrls: ['./skills-entry-container.component.scss'],
})
export class SkillsEntryContainerComponent implements OnInit {
  formGroup: FormGroup = this.skillsService.generateFormGroup();
  skillTypeOptions$: Observable<
    SelectOption[]
  > = this.skillsFacade.skillTypes$.pipe(
    filter((x) => x != null),
    map((skillTypes) =>
      skillTypes.map((skillType) => {
        var option = new SelectOption();
        option.value = skillType.skillType;
        option.viewValue = skillType.skillTypeName;
        return option;
      })
    )
  );
  controlName = SkillsEntryControlName;

  constructor(
    private skillsService: SkillsService,
    private skillsFacade: SkillsFacade
  ) {}

  ngOnInit(): void {
    this.skillsFacade.workSkill$.subscribe((x) => {
      if (x !== undefined) {
        this.formGroup.get(this.controlName.skillName).setValue(x.skillName);
        this.formGroup.get(this.controlName.skillType).setValue(x.skillType);
        this.formGroup.get(this.controlName.skillLevel).setValue(x.skillLevel);
        this.formGroup
          .get(this.controlName.experienceYears)
          .setValue(x.experienceYears);
      }
    });
  }

  regist() {
    var registData = new SkillsEntryModel();
    registData.experienceYears = this.formGroup.get(
      this.controlName.experienceYears
    ).value;
    registData.skillLevel = this.formGroup.get(
      this.controlName.skillLevel
    ).value;
    registData.skillName = this.formGroup.get(this.controlName.skillName).value;
    registData.skillType = this.formGroup.get(this.controlName.skillType).value;
    console.log(registData);
  }
}
