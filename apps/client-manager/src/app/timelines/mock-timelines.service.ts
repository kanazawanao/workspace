import { TimelinesEntryModel } from './entry/timelines-entry-model';
import { FormGroup } from '@angular/forms';
import { ITimeline } from '@workspace/api-interfaces';
import { Observable, of } from 'rxjs';

export class MockTimelinesService {
  generateFormGroup(formData: TimelinesEntryModel): FormGroup {
    return null;
  }

  fetchTimelines(): Observable<ITimeline[]> {
    return of();
  }

  fetchTimeline(id: string): Observable<ITimeline> {
    return of();
  }

  postTimeline(timeline: TimelinesEntryModel): Observable<ITimeline> {
    return of();
  }

  updateTimeline(
    id: number,
    timeline: TimelinesEntryModel
  ): Observable<ITimeline> {
    return of();
  }
}
