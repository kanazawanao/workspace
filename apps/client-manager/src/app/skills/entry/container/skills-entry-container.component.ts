import { SkillsService } from '../../skills.service';
import { SkillsEntryControlName } from '../skills-entry-control-name';
import { SkillsEntryModel } from '../skills-entry-model';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'client-manager-skills-entry-container',
  templateUrl: './skills-entry-container.component.html',
  styleUrls: ['./skills-entry-container.component.scss'],
})
export class SkillsEntryContainerComponent implements OnInit {
  formGroup: FormGroup;
  controlName = SkillsEntryControlName;
  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    var entryModle: SkillsEntryModel = {
      experienceYears: 0,
      skillLevel: 0,
      skillName: '',
      skillType: '',
    };
    this.formGroup = this.skillsService.generateFormGroup(entryModle);
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
