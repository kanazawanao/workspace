import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class SignUpService {
  constructor(private fb: FormBuilder) {}
  generateForm(): FormGroup {
    return this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  signUp(signUpForm: FormGroup) {
    const email = signUpForm.get('email').value;
    const pass = signUpForm.get('password').value;
    console.log(email, pass);
  }
}
