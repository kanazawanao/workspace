import { Inject, Injectable } from '@angular/core';
import { ISkill } from '@workspace/api-interfaces';
import { ApiConstant } from '@workspace/constants';
import { HttpRequestService } from '@workspace/shared-service';
import { Observable } from 'rxjs';
import { SkillsFacade } from './+state/skills.facade';
import * as SkillsActions from './+state/skills.actions';

@Injectable()
export class SkillsService {
  constructor(
    private httpRequestService: HttpRequestService,
    private SkillsFacade: SkillsFacade,
    @Inject('apiUrl') private apiUrl: string
  ) {}
  constants = ApiConstant;

  fetchInitData(): void {
    this.SkillsFacade.dispatch(SkillsActions.loadSkills());
  }

  fetchSkillsInfo(): Observable<ISkill[]> {
    const res = this.httpRequestService.get<ISkill[]>({
      url: `${this.apiUrl}${this.constants.skills}`,
    });
    return res;
  }
}
