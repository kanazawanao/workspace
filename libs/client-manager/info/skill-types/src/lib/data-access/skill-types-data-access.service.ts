import { SkillTypeEntryModel } from '../skill-types-entry.model';
import { Inject, Injectable } from '@angular/core';
import { ISkillType } from '@workspace/api-interfaces';
import { ApiConstant } from '@workspace/constants';
import { HttpRequestService } from '@workspace/shared-service';
import { Observable } from 'rxjs';

@Injectable()
export class SkillTypesDataAccessService {
  constants = ApiConstant;
  constructor(
    private httpRequestService: HttpRequestService,
    @Inject('apiUrl') private apiUrl: string
  ) {}
  fetchSkillTypes(): Observable<ISkillType[]> {
    const res = this.httpRequestService.get<ISkillType[]>({
      url: `${this.apiUrl}${this.constants.skilltypes}`,
    });
    return res;
  }

  fetchSkillType(id: string): Observable<ISkillType> {
    const res = this.httpRequestService.get<ISkillType>({
      url: `${this.apiUrl}${this.constants.skilltypes}/${id}`,
    });
    return res;
  }

  postSkillType(skill: SkillTypeEntryModel): Observable<ISkillType> {
    const res = this.httpRequestService.post<ISkillType>({
      url: `${this.apiUrl}${this.constants.skilltypes}`,
      body: skill,
    });
    return res;
  }

  updateSkillType(
    id: number,
    skill: SkillTypeEntryModel
  ): Observable<ISkillType> {
    const res = this.httpRequestService.put<ISkillType>({
      url: `${this.apiUrl}${this.constants.skilltypes}/${id}`,
      body: skill,
    });
    return res;
  }

  deleteSkillType(id: number) {
    const res = this.httpRequestService.delete({
      url: `${this.apiUrl}${this.constants.skilltypes}/${id}`,
    });
    return res;
  }
}
