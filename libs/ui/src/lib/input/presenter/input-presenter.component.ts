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
  constructor() {}

  ngOnInit(): void {}
}
