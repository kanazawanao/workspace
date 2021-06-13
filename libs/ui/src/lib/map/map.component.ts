import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'ui-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @Input() selectedList: google.maps.places.PlaceResult[] = [];
  @Input() center?: google.maps.LatLng;
  @ViewChild(GoogleMap) map!: GoogleMap;
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;

  zoom = 16;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  infoContent = '';
  constructor() {}

  ngOnInit(): void {}

  openInfoWindow(
    marker: MapMarker,
    place: google.maps.places.PlaceResult
  ): void {
    this.infoContent = place.name ? place.name : '';
    this.infoWindow.open(marker);
  }
}
