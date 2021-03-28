import { SkillTypeEntryModel } from './skill-types-entry.model';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiConstant } from '@workspace/constants';

@Injectable()
export class SkillTypesService {
  constants = ApiConstant;
  constructor(private formBuilder: FormBuilder, private ruter: Router) {}

  generateFormGroup(): FormGroup {
    return this.formBuilder.group(new SkillTypeEntryModel());
  }

  navigateSkillTypesEntry(id: number): void {
    this.ruter.navigate([this.constants.skilltypes, id]);
  }
}
