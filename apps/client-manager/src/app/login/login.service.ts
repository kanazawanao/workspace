import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class LoginService {
  constructor(private formBuilder: FormBuilder) {}

  generateFormGroup(): FormGroup {
    const formGroup = this.formBuilder.group({
      email: new FormControl(),
      passworf: new FormControl(),
    });
    return formGroup;
  }
}
