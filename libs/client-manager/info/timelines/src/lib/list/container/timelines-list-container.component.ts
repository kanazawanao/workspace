import { TimelinesService } from '../../timelines.service';
import { Component, OnInit } from '@angular/core';
import { ITimeline } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';
import { TimelinesFacade } from '../../data-access/+state/timelines.facade';

@Component({
  selector: 'client-manager-timelines-list-container',
  templateUrl: './timelines-list-container.component.html',
  styleUrls: ['./timelines-list-container.component.scss'],
})
export class TimelinesListContainerComponent implements OnInit {
  constructor(
    private timelinesFacade: TimelinesFacade,
    private timelinesService: TimelinesService
  ) {}

  timelines$: Observable<ITimeline[]> = this.timelinesFacade.allTimelines$;
  displayedColumns: string[] = ['event', 'date'];

  ngOnInit(): void {}

  selectEventListner(selectedValue: ITimeline) {
    this.timelinesService.navigateSkillTypesEntry(selectedValue.id);
  }
}
