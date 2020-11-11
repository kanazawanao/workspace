import { SkillsEntryModel } from '../presenter/skills-entry-model';
import { SkillsEntryControlName } from '../skills-entry-control-name';
import { SkillsEntryService } from '../skills-entry.service';
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
  constructor(private skillsEntryService: SkillsEntryService) {}

  ngOnInit(): void {
    var entryModle: SkillsEntryModel = {
      experienceYears: 0,
      skillLevel: 0,
      skillName: '',
      skillType: '',
    };
    this.formGroup = this.skillsEntryService.generateFormGroup(entryModle);
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
    this.skillsEntryService.postSkill(skill);
  }
}
