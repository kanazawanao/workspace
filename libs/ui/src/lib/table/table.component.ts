import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'ui-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T> implements AfterViewInit {
  @Input() dataSource: T[];
  @Input() displayedColumns: string[];
  @Output() selectEvent = new EventEmitter<T>();
  @ViewChild(MatSort) sort: MatSort;
  selectedRow: T;
  tableDataSource: MatTableDataSource<T>;
  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    if (this.dataSource instanceof Observable) {
      this.dataSource.subscribe((x: T[]) => {
        this.tableDataSource = new MatTableDataSource(x);
        this.tableDataSource.sort = this.sort;
      });
    } else {
      this.tableDataSource = new MatTableDataSource(this.dataSource);
      this.tableDataSource.sort = this.sort;
    }
    this.cd.detectChanges();
  }

  selectEventListener(row: T): void {
    this.selectedRow = row;
    this.selectEvent.emit(row);
  }
}
