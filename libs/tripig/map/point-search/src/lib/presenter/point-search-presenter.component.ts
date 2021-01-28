import { PointSearchControlName } from '../point-search-control-name';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'point-search-presenter',
  templateUrl: './point-search-presenter.component.html',
  styleUrls: ['./point-search-presenter.component.scss'],
})
export class PointSearchPresenterComponent implements OnInit {
  @Input() center?: google.maps.LatLng;
  @Input() formGroup: FormGroup;
  @Output() searchEvent = new EventEmitter();
  controlName = PointSearchControlName;
  constructor() {}

  ngOnInit(): void {}
}
