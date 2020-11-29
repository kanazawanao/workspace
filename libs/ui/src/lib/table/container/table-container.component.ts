import { TablePresenterInputData } from '../presenter/table-presenter-input-data';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ui-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss'],
})
export class TableContainerComponent implements OnInit {
  /** データソース */
  @Input() dataSource: any;
  /** カラム定義 */
  @Input() displayedColumns: string[];
  /** 行選択イベント */
  @Output() selectEvent = new EventEmitter<FormGroup>();
  /** プレゼンタコンポーネントの入力データ */
  presenterInputData: TablePresenterInputData;

  constructor() {}

  ngOnInit(): void {
    this.setPresenterInputData();
  }

  setPresenterInputData(): void {
    this.presenterInputData = {
      dataSource: this.dataSource,
      displayedColumns: this.displayedColumns,
    };
  }
}
