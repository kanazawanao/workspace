import { Component, Input, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow } from '@angular/google-maps';

@Component({
  selector: 'ui-map',
  template: '',
})
export class MockMapComponent {
  @Input() center: any;
  @ViewChild('') map?: any;
  @ViewChild('') infoWindow?: any;
  constructor() {}

  ngOnInit(): void {}
}
