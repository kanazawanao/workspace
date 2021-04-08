import { TimelinePresenterInputData } from '../presenter/timeline-presenter-input-data';
import { TimelineService } from '../timeline.service';
import { Component, OnInit } from '@angular/core';
import { TimelinesFacade } from '../+state/timelines.facade';

@Component({
  selector: 'client-timeline-container',
  templateUrl: './timeline-container.component.html',
  styleUrls: ['./timeline-container.component.scss'],
})
export class TimelineContainerComponent implements OnInit {
  constructor(
    private timelinesFacade: TimelinesFacade,
    private timelineService: TimelineService
  ) {}
  presenterInputData: TimelinePresenterInputData;

  ngOnInit(): void {
    this.timelineService.fetchInitData();
    this.setSkillInfoPresenterInputData();
  }

  setSkillInfoPresenterInputData() {
    this.presenterInputData = {
      dataSource$: this.timelinesFacade.allTimelines$,
      displayedColumn: ['date', 'event'],
    };
  }
}
