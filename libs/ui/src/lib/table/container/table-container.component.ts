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
  @Input() set datasource(value: any) {
    this._datasource.next(value);
  }
  private _datasource: Subject<any>;
  /** カラム定義 */
  @Input() set columns(value: string[]) {
    this._displayedColumns.next(value);
  }
  private _displayedColumns: Subject<string[]>;
  /** プレゼンタコンポーネントの入力データ */
  presenterInputData: TablePresenterInputData;

  constructor() {}

  ngOnInit(): void {}
  /**
   * プレゼンタコンポーネントの入力データをセットする
   */
  setPresenterInputData(): void {
    this.presenterInputData = {
      datasource$: this._datasource.asObservable(),
      displayedColumns$: this._displayedColumns.asObservable(),
    };
  }
}
