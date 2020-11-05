import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  SelectOption,
  SelectPresenterInputData,
} from './select-presenter-input-data';

@Component({
  selector: 'ui-select-presenter',
  templateUrl: './select-presenter.component.html',
  styleUrls: ['./select-presenter.component.scss'],
})
export class SelectPresenterComponent implements OnInit {
  @Input() inputData: SelectPresenterInputData;
  get options(): SelectOption[] {
    return this.inputData.options;
  }
  get label(): string {
    return this.inputData.label;
  }
  get isDisabled(): boolean {
    return this.inputData.isDisabled;
  }
  get formControl(): FormControl {
    return this.inputData.formControl;
  }
  constructor() {}

  ngOnInit(): void {}
}
