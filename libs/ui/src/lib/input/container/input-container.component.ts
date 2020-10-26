import { InputPresenterInputData } from '../presenter/input-presenter-input-data';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.scss'],
})
export class InputContainerComponent implements OnInit {
  @Input() label: string;
  @Input() value: string;

  presenterInputData: InputPresenterInputData;
  constructor() {}

  ngOnInit(): void {
    this.setPresenterInputData();
  }

  setPresenterInputData(): void {
    this.presenterInputData = {
      label: this.label,
      value: this.value,
    };
  }
}
