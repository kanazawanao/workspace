import { ListPresenterInputData } from './list-presenter-input-data';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-list-presenter',
  templateUrl: './list-presenter.component.html',
  styleUrls: ['./list-presenter.component.scss'],
})
export class ListPresenterComponent implements OnInit {
  @Input() inputData: ListPresenterInputData;
  get dataSource(): any {
    return this.inputData.dataSource;
  }
  constructor() {}

  ngOnInit(): void {}
}
