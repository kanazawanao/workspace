import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'workspace-sign-in-presenter',
  templateUrl: './sign-in-presenter.component.html',
  styleUrls: ['./sign-in-presenter.component.scss'],
})
export class SignInPresenterComponent implements OnInit {
  @Input() signInForm: FormGroup;
  @Output() signInEvent = new EventEmitter();
  @Output() forgotPasswordEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
