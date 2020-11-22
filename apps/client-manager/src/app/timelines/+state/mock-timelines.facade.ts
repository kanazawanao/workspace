import { timelinesData } from '../timelines.data';
import { EditType } from '@workspace/constants';
import { of } from 'rxjs';
export class MockTimelinesFacade {
  loaded$ = of(true);
  allTimelines$ = of(timelinesData);
  selectedTimelines$ = of(timelinesData[1]);
  workTimeline$ = of(timelinesData[1]);
  editMode$ = of(EditType.create);
  loadTimelines() {}
}
