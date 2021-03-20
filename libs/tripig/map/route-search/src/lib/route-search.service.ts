import { Injectable } from '@angular/core';
import { MapService } from '@workspace/tripig/map/service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Injectable()
export class RouteSearchService {
  constructor(private fb: FormBuilder, private mapService: MapService) {}

  generateFormGroup(): FormGroup {
    return this.fb.group({
      destination: new FormControl('', [Validators.required]),
      category: new FormControl(0),
    });
  }
}
