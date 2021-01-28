import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @Input() center?: google.maps.LatLng;
  constructor() {}

  ngOnInit(): void {}
}
