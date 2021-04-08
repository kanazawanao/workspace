import { TimelinePresenterInputData } from './timeline-presenter-input-data';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'client-timeline-presenter',
  templateUrl: './timeline-presenter.component.html',
  styleUrls: ['./timeline-presenter.component.scss'],
})
export class TimelinePresenterComponent implements OnInit {
  constructor() {}
  @Input() inputData: TimelinePresenterInputData;
  get dataSource$() {
    return this.inputData.dataSource$;
  }
  get displayedColumn() {
    return this.inputData.displayedColumn;
  }
  ngOnInit(): void {}
}
