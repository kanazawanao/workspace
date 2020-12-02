import { SkillTypesService } from '../../skill-types.service';
import { SkillTypesEntryControlName } from '../skill-types-entry-control-name';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'client-manager-skill-types-entry-container',
  templateUrl: './skill-types-entry-container.component.html',
  styleUrls: ['./skill-types-entry-container.component.scss'],
})
export class SkillTypesEntryContainerComponent implements OnInit {
  formGroup: FormGroup;
  controlName = SkillTypesEntryControlName;
  constructor(private skillTypesService: SkillTypesService) {}

  ngOnInit(): void {
    this.formGroup = this.skillTypesService.generateFormGroup();
  }

  regist() {}
}
