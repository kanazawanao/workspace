import { PointSearchModel } from './point-search.model';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class PointSearchService {
  constructor(private formBuilder: FormBuilder) {}

  generateFormGroup(): FormGroup {
    return this.formBuilder.group(new PointSearchModel());
  }
}
