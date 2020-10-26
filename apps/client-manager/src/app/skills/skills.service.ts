import { Inject, Injectable } from '@angular/core';
import { ISkill } from '@workspace/api-interfaces';
import { HttpRequestService } from '@workspace/shared-service';
import { Observable } from 'rxjs';

@Injectable()
export class SkillsService {
  constructor(
    private httpRequestService: HttpRequestService,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  fetchSkillsInfo(): Observable<ISkill[]> {
    const res = this.httpRequestService.get<ISkill[]>({
      url: `${this.apiUrl}/skills`,
    });
    return res;
  }
}
