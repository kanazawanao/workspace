import { TablePresenterInputData } from './table-presenter-input-data';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'ui-table-presenter',
  templateUrl: './table-presenter.component.html',
  styleUrls: ['./table-presenter.component.scss'],
})
export class TablePresenterComponent implements OnInit, AfterViewInit {
  @Input() inputData: TablePresenterInputData;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  get displayedColumns(): string[] {
    return this.inputData.displayedColumns;
  }
  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.inputData.dataSource);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
