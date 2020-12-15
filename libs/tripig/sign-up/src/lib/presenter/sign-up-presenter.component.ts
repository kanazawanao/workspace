import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'workspace-sign-up-presenter',
  templateUrl: './sign-up-presenter.component.html',
  styleUrls: ['./sign-up-presenter.component.scss'],
})
export class SignUpPresenterComponent implements OnInit {
  @Input() signUpForm: FormGroup;
  @Output() signUpEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  signUp() {}
}
