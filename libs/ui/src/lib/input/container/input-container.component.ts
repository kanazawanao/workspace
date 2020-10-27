import { InputPresenterInputData } from '../presenter/input-presenter-input-data';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ui-input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.scss'],
})
export class InputContainerComponent implements OnInit {
  @Input() label: string;
  @Input() formControl: FormControl;

  presenterInputData: InputPresenterInputData;
  constructor() {}

  ngOnInit(): void {
    this.setPresenterInputData();
  }

  setPresenterInputData(): void {
    this.presenterInputData = {
      label: this.label,
      formControl: this.formControl,
    };
  }
}
