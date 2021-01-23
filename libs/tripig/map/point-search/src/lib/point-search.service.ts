import { PointSearchModel } from './point-search.model';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class PointSearchService {
  constructor(private fb: FormBuilder) {}

  generateFormGroup(): FormGroup {
    return this.fb.group({
      destination: ['', Validators.required],
    });
  }
}
