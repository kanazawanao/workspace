import { LoginService } from '../login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'client-manager-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
})
export class LoginContainerComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.formGroup = this.loginService.generateFormGroup();
  }

  loginEventListner() {
    this.loginService.login({
      email: this.formGroup.get('email').value,
      password: this.formGroup.get('password').value,
    });
  }
}
