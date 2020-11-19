import { BaseComponent } from '../../base/base-component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'client-manager-login-presenter',
  templateUrl: './login-presenter.component.html',
  styleUrls: ['./login-presenter.component.scss'],
})
export class LoginPresenterComponent extends BaseComponent implements OnInit {
  @Output() loginEvent = new EventEmitter();
  @Input() formGroup: FormGroup;
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
