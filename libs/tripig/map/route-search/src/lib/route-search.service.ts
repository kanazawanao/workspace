import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MapService } from '@workspace/tripig/map/service';

@Injectable()
export class RouteSearchService {
  constructor(private fb: FormBuilder, private mapService: MapService) {}

  generateFormGroup(
    origin: string,
    destination: string,
    mode: string
  ): FormGroup {
    return this.fb.group({
      origin: new FormControl(origin),
      destination: new FormControl(destination),
      mode: new FormControl(mode),
      category: new FormControl(0),
    });
  }

  route(
    request: google.maps.DirectionsRequest
  ): Promise<google.maps.DirectionsResult> {
    return this.mapService.route(request);
  }
}
