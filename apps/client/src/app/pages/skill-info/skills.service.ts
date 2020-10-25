import { Inject, Injectable } from '@angular/core';
import { ISkill } from '@workspace/api-interfaces';
import { HttpRequestService } from '@workspace/shared-service';
import { Observable } from 'rxjs';
import { SkillsFacade } from './+state/skills.facade';

@Injectable()
export class SkillsService {
  constructor(
    private httpRequestService: HttpRequestService,
    private SkillsFacade: SkillsFacade,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  fetchSkillsInfo(): Observable<ISkill> {
    const res = this.httpRequestService.get<ISkill>({
      url: `${this.apiUrl}/skills`,
    });
    return res;
  }
}
