import { BaseComponent } from '../../../base/base-component';
import { SkillsService } from '../../skills.service';
import { SkillsEntryControlName } from '../skills-entry-control-name';
import { SkillsEntryModel } from '../skills-entry.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ISkillType } from '@workspace/api-interfaces';
import { SelectOption } from '@workspace/ui';
import { Observable } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { SkillsFacade } from '../../+state/skills.facade';

@Component({
  selector: 'client-manager-skills-entry-container',
  templateUrl: './skills-entry-container.component.html',
  styleUrls: ['./skills-entry-container.component.scss'],
})
export class SkillsEntryContainerComponent
  extends BaseComponent
  implements OnInit, OnDestroy {
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
  ) {
    super();
  }

  ngOnInit(): void {
    this.skillsFacade.workSkill$
      .pipe(takeUntil(this.unsubscribeObservable$))
      .subscribe((x) => {
        if (x !== undefined) {
          this.formGroup.get(this.controlName.skillName).setValue(x.skillName);
          this.formGroup.get(this.controlName.skillType).setValue(x.skillType);
          this.formGroup
            .get(this.controlName.skillLevel)
            .setValue(x.skillLevel);
          this.formGroup
            .get(this.controlName.experienceYears)
            .setValue(x.experienceYears);
        }
      });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
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
    this.registSkill(registData);
  }

  registSkill(skill: SkillsEntryModel) {
    this.skillsService.postSkill(skill);
  }
}
