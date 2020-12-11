import { FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
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
  selector: 'ui-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() dataSource: any;
  @Input() displayedColumns: string[];
  @Output() selectEvent = new EventEmitter<FormGroup>();
  @ViewChild(MatSort) sort: MatSort;
  selectedRow: any;
  tableDataSource: MatTableDataSource<any>;
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    if (this.dataSource instanceof Observable) {
      this.dataSource.subscribe((x: any[]) => {
        this.tableDataSource = new MatTableDataSource(x);
        this.tableDataSource.sort = this.sort;
      });
    } else {
      this.tableDataSource = new MatTableDataSource(this.dataSource);
      this.tableDataSource.sort = this.sort;
    }
    this.cd.detectChanges();
  }

  selectEventListener(row: any): void {
    this.selectedRow = row;
    this.selectEvent.emit(row);
  }
}
