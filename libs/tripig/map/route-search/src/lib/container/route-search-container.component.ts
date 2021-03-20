import { RouteSearchPresenterComponent } from '../presenter/route-search-presenter.component';
import { RouteSearchService } from '../route-search.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'route-search-container',
  templateUrl: './route-search-container.component.html',
  styleUrls: ['./route-search-container.component.scss'],
})
export class RouteSearchContainerComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private routeSearchService: RouteSearchService
  ) {}

  @ViewChild(RouteSearchPresenterComponent)
  mapComponent!: RouteSearchPresenterComponent;

  directionsRenderer = new google.maps.DirectionsRenderer();
  formGroup: FormGroup;
  middlePointLatLng?: google.maps.LatLng;

  ngOnInit(): void {
    const origin = this.route.snapshot.queryParams['origin'];
    const destination = this.route.snapshot.queryParams['destination'];
    const mode = this.route.snapshot.queryParams['mode'];
    this.formGroup = this.routeSearchService.generateFormGroup(
      origin,
      destination,
      mode
    );
    this.setRouteMap();
  }

  private setRouteMap(): void {
    const request: google.maps.DirectionsRequest = {
      origin: this.formGroup.get('origin').value,
      destination: this.formGroup.get('destination').value,
      travelMode: this.formGroup.get('mode').value,
    };
    this.routeSearchService.route(request).then((result) => {
      this.directionsRenderer.setMap(
        this.mapComponent.mapComponent.map.data.getMap()
      );
      this.directionsRenderer.setDirections(result);
      this.middlePointLatLng =
        result.routes[0].overview_path[
          Math.round(result.routes[0].overview_path.length / 2)
        ];
    });
  }
}
