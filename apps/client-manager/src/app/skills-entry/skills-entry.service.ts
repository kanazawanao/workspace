import { SkillsEntryModel } from './presenter/skills-entry-model';
import { Inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpRequestService } from '@workspace/shared-service';

@Injectable()
export class SkillsEntryService {
  constructor(
    private formBuilder: FormBuilder,
    private httpRequestService: HttpRequestService,
    @Inject('apiUrl') private apiUrl: string
  ) {}
  generateFormGroup(formData: SkillsEntryModel): FormGroup {
    const formGroup = this.formBuilder.group(formData);
    return formGroup;
  }

  postSkill(skill: SkillsEntryModel) {
    console.log(skill);
    this.httpRequestService
      .post({
        url: `${this.apiUrl}/skills`,
        body: skill,
      })
      .subscribe();
  }
}
