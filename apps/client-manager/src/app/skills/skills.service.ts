import { SkillsEntryModel } from './entry/skills-entry.model';
import { Inject, Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ISkill, ISkillType } from '@workspace/api-interfaces';
import { HttpRequestService } from '@workspace/shared-service';
import { Observable } from 'rxjs';

@Injectable()
export class SkillsService {
  constructor(
    private httpRequestService: HttpRequestService,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  generateFormGroup(): FormGroup {
    return new FormGroup({
      skillType: new FormControl(''),
      skillName: new FormControl(''),
      experienceYears: new FormControl(''),
      skillLevel: new FormControl(''),
    });
  }

  fetchSkills(): Observable<ISkill[]> {
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

  postSkill(skill: SkillsEntryModel): Observable<ISkill> {
    var res = this.httpRequestService.post<ISkill>({
      url: `${this.apiUrl}/skills`,
      body: skill,
    });
    return res;
  }

  updateSkill(id: number, skill: SkillsEntryModel): Observable<ISkill> {
    var res = this.httpRequestService.put<ISkill>({
      url: `${this.apiUrl}/skills${id}`,
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
