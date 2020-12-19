import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FireAuthService } from '@workspace/shared-service';

@Injectable()
export class SignInService {
  constructor(
    private fb: FormBuilder,
    private fireAuthService: FireAuthService
  ) {}

  generateForm(): FormGroup {
    return this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signIn(signInForm: FormGroup) {
    const email = signInForm.get('email').value;
    const pass = signInForm.get('password').value;
    this.fireAuthService.signin(email, pass).then((result) => {
      if (result) {
        alert('ログインに成功しました。');
      } else {
        alert('ログインに失敗しました。');
      }
    });
  }

  googleSignIn() {
    this.fireAuthService.googleSignIn();
  }
}
