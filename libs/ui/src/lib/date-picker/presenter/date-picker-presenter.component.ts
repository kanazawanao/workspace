import { DatePickerPresenterInputData } from './date-picker-presenter-input-data';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-date-picker-presenter',
  templateUrl: './date-picker-presenter.component.html',
  styleUrls: ['./date-picker-presenter.component.scss'],
})
export class DatePickerPresenterComponent implements OnInit {
  @Input() inputData: DatePickerPresenterInputData;
  constructor() {}

  ngOnInit(): void {}
}
