import { TimelinesEntryModel } from '../../timelines-entry.model';
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
  loadUpdateInitTimelineEntry(timelineId: string) {}
  createTimeline(timelineEntry: TimelinesEntryModel) {}
  updateTimeline(id: number, timelineEntry: TimelinesEntryModel) {}
  deleteTimeline(id: number) {}
  setEditerMode(editerMode: EditType) {}
}
