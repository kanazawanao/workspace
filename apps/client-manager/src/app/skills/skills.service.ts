import { SkillsEntryModel } from './entry/skills-entry.model';
import { Inject, Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ISkill, ISkillType } from '@workspace/api-interfaces';
import { ApiConstant } from '@workspace/constants';
import { HttpRequestService } from '@workspace/shared-service';
import { Observable } from 'rxjs';

@Injectable()
export class SkillsService {
  constants = ApiConstant;
  constructor(
    private formBuilder: FormBuilder,
    private ruter: Router,
    private httpRequestService: HttpRequestService,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  generateFormGroup(): FormGroup {
    return this.formBuilder.group(new SkillsEntryModel());
  }

  fetchSkills(): Observable<ISkill[]> {
    const res = this.httpRequestService.get<ISkill[]>({
      url: `${this.apiUrl}${this.constants.skills}`,
    });
    return res;
  }

  fetchSkill(id: string): Observable<ISkill> {
    var res = this.httpRequestService.get<ISkill>({
      url: `${this.apiUrl}${this.constants.skills}/${id}`,
    });
    return res;
  }

  postSkill(skill: SkillsEntryModel): Observable<ISkill> {
    var res = this.httpRequestService.post<ISkill>({
      url: `${this.apiUrl}${this.constants.skills}`,
      body: skill,
    });
    return res;
  }

  updateSkill(id: number, skill: SkillsEntryModel): Observable<ISkill> {
    var res = this.httpRequestService.put<ISkill>({
      url: `${this.apiUrl}${this.constants.skills}/${id}`,
      body: skill,
    });
    return res;
  }

  fetchSkillTypes(): Observable<ISkillType[]> {
    const res = this.httpRequestService.get<ISkillType[]>({
      url: `${this.apiUrl}${this.constants.skilltypes}`,
    });
    return res;
  }

  navigateSkillTypesEntry(id: number): void {
    this.ruter.navigate(['/skills', id]);
  }
}
