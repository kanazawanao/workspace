import { InputPresenterInputData } from './input-presenter-input-data';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ui-input-presenter',
  templateUrl: './input-presenter.component.html',
  styleUrls: ['./input-presenter.component.scss'],
})
export class InputPresenterComponent implements OnInit {
  @Input() inputData: InputPresenterInputData;
  get formControl(): FormControl {
    return this.inputData.formControl;
  }
  get label(): string {
    return this.inputData.label;
  }
  get type(): string {
    return this.inputData.type;
  }
  constructor() {}

  ngOnInit(): void {
    console.log(this.formControl.validator);
  }
}
