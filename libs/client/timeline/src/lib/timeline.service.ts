import { Inject, Injectable } from '@angular/core';
import { ITimeline } from '@workspace/api-interfaces';
import { ApiConstant } from '@workspace/constants';
import { HttpRequestService } from '@workspace/shared-service';
import { Observable } from 'rxjs';
import { TimelinesFacade } from './+state/timelines.facade';
import * as TimelinesActions from './+state/timelines.actions';

@Injectable()
export class TimelineService {
  constructor(
    private httpRequestService: HttpRequestService,
    private timelinesFacade: TimelinesFacade,
    @Inject('apiUrl') private apiUrl: string
  ) {}
  constants = ApiConstant;

  fetchInitData(): void {
    this.timelinesFacade.dispatch(TimelinesActions.loadTimelines());
  }

  fetchTimelinessInfo(): Observable<ITimeline[]> {
    const res = this.httpRequestService.get<ITimeline[]>({
      url: `${this.apiUrl}${this.constants.timelines}`,
    });
    return res;
  }
}
