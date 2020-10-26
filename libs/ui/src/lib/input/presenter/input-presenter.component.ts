import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-input-presenter',
  templateUrl: './input-presenter.component.html',
  styleUrls: ['./input-presenter.component.scss'],
})
export class InputPresenterComponent implements OnInit {
  @Input() inputData: InputPresenterComponent;
  constructor() {}

  ngOnInit(): void {}
}
