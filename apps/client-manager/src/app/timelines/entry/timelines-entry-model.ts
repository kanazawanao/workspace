import { ITimeline } from '@workspace/api-interfaces';

export class TimelinesEntryModel implements ITimeline {
  date: Date = new Date();
  event: string = '';
}
