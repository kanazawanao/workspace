import { UsersEntryModel } from './users-entry.model';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiConstant } from '@workspace/constants';

@Injectable()
export class UsersService {
  constants = ApiConstant;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  generateFormGroup(): FormGroup {
    return this.formBuilder.group(new UsersEntryModel());
  }

  navigateSkillTypesEntry(id: number): void {
    this.router.navigate(['/info/users', id]);
  }
}
