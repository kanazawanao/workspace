import { Component, Input, OnInit } from '@angular/core';
import {
  ListDataSource,
  ListPresenterInputData,
} from '../presenter/list-presenter-input-data';

@Component({
  selector: 'ui-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss'],
})
export class ListContainerComponent implements OnInit {
  @Input() dataSource: ListDataSource[];

  presenterInputData: ListPresenterInputData;
  constructor() {}

  ngOnInit(): void {
    this.setPresenterInputData();
  }

  setPresenterInputData(): void {
    this.presenterInputData = {
      dataSource: this.dataSource,
    };
  }
}
