import { Component, Input, OnInit } from '@angular/core';
import { ITimeline } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'client-manager-timelines-list-presenter',
  templateUrl: './timelines-list-presenter.component.html',
  styleUrls: ['./timelines-list-presenter.component.scss'],
})
export class TimelinesListPresenterComponent implements OnInit {
  @Input() timelines$: Observable<ITimeline[]>;
  @Input() displayedColumns: string[];
  constructor() {}

  ngOnInit(): void {}
}
