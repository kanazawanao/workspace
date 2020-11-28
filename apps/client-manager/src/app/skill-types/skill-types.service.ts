import { SkillTypeEntryModel } from './entry/skill-types-entry.model';
import { Inject, Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ISkillType } from '@workspace/api-interfaces';
import { HttpRequestService } from '@workspace/shared-service';
import { Observable } from 'rxjs';

@Injectable()
export class SkillTypesService {
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
      url: `${this.apiUrl}/skill-types`,
    });
    return res;
  }

  fetchSkill(id: string): Observable<ISkillType> {
    var res = this.httpRequestService.get<ISkillType>({
      url: `${this.apiUrl}/skill-types/${id}`,
    });
    return res;
  }

  postSkill(skill: SkillTypeEntryModel): Observable<ISkillType> {
    var res = this.httpRequestService.post<ISkillType>({
      url: `${this.apiUrl}/skill-types`,
      body: skill,
    });
    return res;
  }

  updateSkill(id: number, skill: SkillTypeEntryModel): Observable<ISkillType> {
    var res = this.httpRequestService.put<ISkillType>({
      url: `${this.apiUrl}/skill-types/${id}`,
      body: skill,
    });
    return res;
  }

  fetchSkillTypes(): Observable<ISkillType[]> {
    const res = this.httpRequestService.get<ISkillType[]>({
      url: `${this.apiUrl}/skill-types`,
    });
    return res;
  }
}
