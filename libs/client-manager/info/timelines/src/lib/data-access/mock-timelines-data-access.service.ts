import { ITimeline } from '@workspace/api-interfaces';
import { Observable, of } from 'rxjs';
import { timelinesData } from './timelines.data';

export class MockTimelinesDataAccessService {
  fetchTimelines(): Observable<ITimeline[]> {
    return of(timelinesData);
  }

  fetchTimeline(): Observable<ITimeline> {
    return of(timelinesData[0]);
  }

  postTimeline(): Observable<ITimeline> {
    return of(timelinesData[1]);
  }

  updateTimeline(): Observable<ITimeline> {
    return of(timelinesData[1]);
  }

  deleteTimeline() {}
}
