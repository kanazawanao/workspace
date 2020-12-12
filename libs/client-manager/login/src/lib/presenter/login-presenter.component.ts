import { LoginControlName } from '../login-control-name';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'client-manager-login-presenter',
  templateUrl: './login-presenter.component.html',
  styleUrls: ['./login-presenter.component.scss'],
})
export class LoginPresenterComponent {
  @Output() loginEvent = new EventEmitter();
  @Input() formGroup: FormGroup;
  controlName = LoginControlName;
}
