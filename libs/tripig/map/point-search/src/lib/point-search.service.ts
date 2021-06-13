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
  get pagination() {
    return this.mapService.pagination;
  }
  get suggestList$() {
    return this.mapService.suggestList$;
  }
  get hasNextPage$() {
    return this.mapService.hasNextPage$;
  }
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
  ): void {
    this.mapService.nearbySearch(service, request);
  }

  nextPage() {
    this.pagination.nextPage();
  }
}
