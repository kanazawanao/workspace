import { TablePresenterInputData } from './table-presenter-input-data';
import { FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'ui-table-presenter',
  templateUrl: './table-presenter.component.html',
  styleUrls: ['./table-presenter.component.scss'],
})
export class TablePresenterComponent implements OnInit, AfterViewInit {
  @Input() inputData: TablePresenterInputData;
  /** 行選択イベント */
  @Output() selectEvent = new EventEmitter<FormGroup>();
  @ViewChild(MatSort) sort: MatSort;
  /** 選択された行を保持する */
  selectedRow: any;
  dataSource: MatTableDataSource<any>;
  get displayedColumns(): string[] {
    return this.inputData.displayedColumns;
  }
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    if (this.inputData.dataSource instanceof Observable) {
      this.inputData.dataSource.subscribe((x: any[]) => {
        this.dataSource = new MatTableDataSource(x);
        this.dataSource.sort = this.sort;
      });
    } else {
      this.dataSource = new MatTableDataSource(this.inputData.dataSource);
      this.dataSource.sort = this.sort;
    }
    this.cd.detectChanges();
  }

  /**
   * 行を選択したイベントを処理する
   * @param row 選択された行
   */
  selectEventListener(row: any): void {
    this.selectedRow = row;
    this.selectEvent.emit(row);
  }
}
