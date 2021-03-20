import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

export interface Mode {
  value: google.maps.TravelMode;
  viewValue: string;
}

@Component({
  selector: 'workspace-route-search',
  templateUrl: './route-search.component.html',
  styleUrls: ['./route-search.component.scss'],
})
export class RouteSearchComponent implements OnInit {
  constructor(private router: Router, private fb: FormBuilder) {}

  travelModes: Mode[] = [
    { value: google.maps.TravelMode.DRIVING, viewValue: 'directions_car' },
    { value: google.maps.TravelMode.WALKING, viewValue: 'directions_walk' },
    { value: google.maps.TravelMode.BICYCLING, viewValue: 'directions_bike' },
    { value: google.maps.TravelMode.TRANSIT, viewValue: 'directions_transit' },
    { value: google.maps.TravelMode.TWO_WHEELER, viewValue: 'motorcycle' },
  ];

  searchForm = this.fb.group({
    origin: new FormControl(''),
    destination: new FormControl(''),
    selectedTravelMode: [this.travelModes[0]],
  });

  get origin(): string {
    return this.searchForm.controls['origin'].value;
  }
  get destination(): string {
    return this.searchForm.controls['destination'].value;
  }
  get selectedMode(): Mode {
    return this.searchForm.controls['selectedTravelMode'].value;
  }

  ngOnInit(): void {}

  search(): void {
    this.router.navigate(['/projects/map/route-search'], {
      queryParams: {
        origin: this.origin,
        destination: this.destination,
        mode: this.selectedMode,
      },
    });
  }
}
