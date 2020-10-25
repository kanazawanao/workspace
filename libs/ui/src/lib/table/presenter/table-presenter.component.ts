import { TablePresenterInputData } from './table-presenter-input-data';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ui-table-presenter',
  templateUrl: './table-presenter.component.html',
  styleUrls: ['./table-presenter.component.scss'],
})
export class TablePresenterComponent implements OnInit {
  @Input() inputData: TablePresenterInputData;
  get dataSource(): any {
    return this.inputData.dataSource;
  }
  get displayedColumns(): string[] {
    return this.inputData.displayedColumns;
  }
  constructor() {}

  ngOnInit(): void {}
}
