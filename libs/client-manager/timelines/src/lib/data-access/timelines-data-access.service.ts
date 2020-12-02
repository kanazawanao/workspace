import { TimelinesEntryModel } from '../timelines-entry.model';
import { Inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ITimeline } from '@workspace/api-interfaces';
import { ApiConstant } from '@workspace/constants';
import { HttpRequestService } from '@workspace/shared-service';
import { Observable } from 'rxjs';

@Injectable()
export class TimelinesDataAccessService {
  constants = ApiConstant;
  constructor(
    private formBuilder: FormBuilder,
    private ruter: Router,
    private httpRequestService: HttpRequestService,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  generateFormGroup(): FormGroup {
    return this.formBuilder.group(new TimelinesEntryModel());
  }

  fetchTimelines(): Observable<ITimeline[]> {
    const res = this.httpRequestService.get<ITimeline[]>({
      url: `${this.apiUrl}${this.constants.timelines}`,
    });
    return res;
  }

  fetchTimeline(id: string): Observable<ITimeline> {
    var res = this.httpRequestService.get<ITimeline>({
      url: `${this.apiUrl}${this.constants.timelines}/${id}`,
    });
    return res;
  }

  postTimeline(timeline: TimelinesEntryModel): Observable<ITimeline> {
    var res = this.httpRequestService.post<ITimeline>({
      url: `${this.apiUrl}${this.constants.timelines}`,
      body: timeline,
    });
    return res;
  }

  updateTimeline(
    id: number,
    timeline: TimelinesEntryModel
  ): Observable<ITimeline> {
    var res = this.httpRequestService.put<ITimeline>({
      url: `${this.apiUrl}${this.constants.timelines}/${id}`,
      body: timeline,
    });
    return res;
  }

  navigateSkillTypesEntry(id: number): void {
    this.ruter.navigate(['/timelines', id]);
  }
}
