import { TablePresenterInputData } from './table-presenter-input-data';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-table-presenter',
  templateUrl: './table-presenter.component.html',
  styleUrls: ['./table-presenter.component.scss'],
})
export class TablePresenterComponent implements OnInit {
  @Input() inputData: TablePresenterInputData;
  constructor() {}

  ngOnInit(): void {}
}
