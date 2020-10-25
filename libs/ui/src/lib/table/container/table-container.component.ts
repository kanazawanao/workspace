import { TablePresenterInputData } from '../presenter/table-presenter-input-data';
import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'ui-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss'],
})
export class TableContainerComponent implements OnInit {
  /** データソース */
  @Input() dataSource: any;
  /** カラム定義 */
  @Input() columns: string[];
  /** プレゼンタコンポーネントの入力データ */
  presenterInputData: TablePresenterInputData;

  constructor() {}

  ngOnInit(): void {
    this.setPresenterInputData();
  }

  setPresenterInputData(): void {
    this.presenterInputData = {
      dataSource: this.dataSource,
      displayedColumns: this.columns,
    };
  }
}
