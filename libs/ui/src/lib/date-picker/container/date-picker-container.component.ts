import { DatePickerPresenterInputData } from '../presenter/date-picker-presenter-input-data';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ui-date-picker-container',
  templateUrl: './date-picker-container.component.html',
  styleUrls: ['./date-picker-container.component.scss'],
})
export class DatePickerContainerComponent implements OnInit {
  @Input() dateFormControl: FormControl;
  presenterInputData: DatePickerPresenterInputData;
  constructor() {}

  ngOnInit(): void {
    this.setPresenterInputData();
  }

  setPresenterInputData(): void {
    this.presenterInputData = {
      formControl: this.dateFormControl,
    };
  }
}
