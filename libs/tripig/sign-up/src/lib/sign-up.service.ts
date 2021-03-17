import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FireAuthService } from '@workspace/shared-service';

@Injectable()
export class SignUpService {
  constructor(
    private fb: FormBuilder,
    private fireAuthService: FireAuthService
  ) {}
  generateForm(email: string): FormGroup {
    return this.fb.group({
      email: [email, Validators.required],
      password: ['', Validators.required],
    });
  }

  signUp(signUpForm: FormGroup) {
    const email = signUpForm.get('email').value;
    const pass = signUpForm.get('password').value;
    this.fireAuthService.signup(email, pass);
  }
}
