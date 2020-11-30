import { BaseComponent } from '../../../base/base.component';
import { ITimeline } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

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
  @Output() selectEvent = new EventEmitter();
  constructor() {
    super();
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
