import { BaseComponent } from '../../../base/base-component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ITimeline } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';
import { TimelinesFacade } from '../../+state/timelines.facade';

@Component({
  selector: 'client-manager-timelines-list-container',
  templateUrl: './timelines-list-container.component.html',
  styleUrls: ['./timelines-list-container.component.scss'],
})
export class TimelinesListContainerComponent
  extends BaseComponent
  implements OnInit, OnDestroy {
  timelines$: Observable<ITimeline[]> = this.timelinesFacade.allTimelines$;
  displayedColumns: string[] = ['event', 'date'];

  constructor(private timelinesFacade: TimelinesFacade) {
    super();
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
