import { SkillsEntryModel } from './entry/skills-entry-model';
import { Inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ISkill } from '@workspace/api-interfaces';
import { HttpRequestService } from '@workspace/shared-service';
import { Observable } from 'rxjs';

@Injectable()
export class SkillsService {
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
    var res = this.httpRequestService.post({
      url: `${this.apiUrl}/skills`,
      body: skill,
    });
    return res;
  }

  fetchSkillsInfo(): Observable<ISkill[]> {
    const res = this.httpRequestService.get<ISkill[]>({
      url: `${this.apiUrl}/skills`,
    });
    return res;
  }

  fetchSkill(id: string): Observable<ISkill> {
    var res = this.httpRequestService.get<ISkill>({
      url: `${this.apiUrl}/skills/${id}`,
    });
    return res;
  }
}
