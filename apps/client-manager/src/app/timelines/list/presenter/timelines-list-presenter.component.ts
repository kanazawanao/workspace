import { BaseComponent } from '../../../base/base-component';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ITimeline } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'client-manager-timelines-list-presenter',
  templateUrl: './timelines-list-presenter.component.html',
  styleUrls: ['./timelines-list-presenter.component.scss'],
})
export class TimelinesListPresenterComponent
  extends BaseComponent
  implements OnInit, OnDestroy {
  @Input() timelines$: Observable<ITimeline[]>;
  @Input() displayedColumns: string[];
  constructor() {
    super();
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
