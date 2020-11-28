import { TimelinesEntryModel } from './entry/timelines-entry.model';
import { Inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ITimeline } from '@workspace/api-interfaces';
import { HttpRequestService } from '@workspace/shared-service';
import { Observable } from 'rxjs';

@Injectable()
export class TimelinesService {
  API_TIMELINES = '/timelines';
  constructor(
    private formBuilder: FormBuilder,
    private httpRequestService: HttpRequestService,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  generateFormGroup(formData: TimelinesEntryModel): FormGroup {
    const formGroup = this.formBuilder.group(formData);
    return formGroup;
  }

  fetchTimelines(): Observable<ITimeline[]> {
    const res = this.httpRequestService.get<ITimeline[]>({
      url: `${this.apiUrl}${this.API_TIMELINES}`,
    });
    return res;
  }

  fetchTimeline(id: string): Observable<ITimeline> {
    var res = this.httpRequestService.get<ITimeline>({
      url: `${this.apiUrl}${this.API_TIMELINES}/${id}`,
    });
    return res;
  }

  postTimeline(timeline: TimelinesEntryModel): Observable<ITimeline> {
    var res = this.httpRequestService.post<ITimeline>({
      url: `${this.apiUrl}${this.API_TIMELINES}`,
      body: timeline,
    });
    return res;
  }

  updateTimeline(
    id: number,
    timeline: TimelinesEntryModel
  ): Observable<ITimeline> {
    var res = this.httpRequestService.put<ITimeline>({
      url: `${this.apiUrl}${this.API_TIMELINES}/${id}`,
      body: timeline,
    });
    return res;
  }
}
