import { ListDataSource } from './list-input-data';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() dataSource: ListDataSource[];

  constructor() {}

  ngOnInit(): void {}
}
