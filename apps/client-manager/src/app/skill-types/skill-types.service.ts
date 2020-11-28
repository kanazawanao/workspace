import { SkillTypeEntryModel } from './entry/skill-types-entry.model';
import { Inject, Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ISkillType } from '@workspace/api-interfaces';
import { ApiConstant } from '@workspace/constants';
import { HttpRequestService } from '@workspace/shared-service';
import { Observable } from 'rxjs';

@Injectable()
export class SkillTypesService {
  constants = ApiConstant;
  constructor(
    private formBuilder: FormBuilder,
    private httpRequestService: HttpRequestService,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  generateFormGroup(): FormGroup {
    return this.formBuilder.group(new SkillTypeEntryModel());
  }

  fetchSkills(): Observable<ISkillType[]> {
    const res = this.httpRequestService.get<ISkillType[]>({
      url: `${this.apiUrl}${this.constants.skilltypes}`,
    });
    return res;
  }

  fetchSkill(id: string): Observable<ISkillType> {
    var res = this.httpRequestService.get<ISkillType>({
      url: `${this.apiUrl}${this.constants.skilltypes}/${id}`,
    });
    return res;
  }

  postSkill(skill: SkillTypeEntryModel): Observable<ISkillType> {
    var res = this.httpRequestService.post<ISkillType>({
      url: `${this.apiUrl}${this.constants.skilltypes}`,
      body: skill,
    });
    return res;
  }

  updateSkill(id: number, skill: SkillTypeEntryModel): Observable<ISkillType> {
    var res = this.httpRequestService.put<ISkillType>({
      url: `${this.apiUrl}${this.constants.skilltypes}/${id}`,
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
}
