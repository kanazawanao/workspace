import { Injectable } from '@angular/core';
import { MapService } from '@workspace/tripig/map/service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Injectable()
export class PointSearchService {
  constructor(private fb: FormBuilder, private mapService: MapService) {}

  generateFormGroup(destination: string, categoryIndex: number): FormGroup {
    return this.fb.group({
      destination: new FormControl(destination, [Validators.required]),
      category: new FormControl(categoryIndex),
    });
  }

  geocode(destination: string): Promise<google.maps.GeocoderResult> {
    return this.mapService.geocode({ address: destination });
  }

  nearbySearch(
    service: google.maps.places.PlacesService,
    request: google.maps.places.PlaceSearchRequest
  ): Promise<google.maps.places.PlaceResult[]> {
    return this.mapService.nearbySearch(service, request);
  }
}
