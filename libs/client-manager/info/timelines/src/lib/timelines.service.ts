import { TimelinesEntryModel } from './timelines-entry.model';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiConstant } from '@workspace/constants';

@Injectable()
export class TimelinesService {
  constants = ApiConstant;
  constructor(private formBuilder: FormBuilder, private ruter: Router) {}

  generateFormGroup(): FormGroup {
    return this.formBuilder.group(new TimelinesEntryModel());
  }

  navigateSkillTypesEntry(id: number): void {
    this.ruter.navigate(['/info/timelines', id]);
  }
}
