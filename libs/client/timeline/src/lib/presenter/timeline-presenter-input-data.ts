import { ITimeline } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';

export class TimelinePresenterInputData {
  displayedColumn: string[];
  dataSource$: Observable<ITimeline[]>;
}
