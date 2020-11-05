import { LoginService } from '../login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'client-manager-login-presenter',
  templateUrl: './login-presenter.component.html',
  styleUrls: ['./login-presenter.component.scss'],
})
export class LoginPresenterComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private loginServive: LoginService) {}

  ngOnInit(): void {
    this.formGroup = this.loginServive.generateFormGroup();
  }
  login() {
    console.log(this.formGroup.get('email').value);
    console.log(this.formGroup.get('password').value);
  }
}
