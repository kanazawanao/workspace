import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'workspace-sign-in-presenter',
  template: '',
})
export class MockSignInPresenterComponent {
  @Input() signInForm: FormGroup;
  @Output() signInEvent = new EventEmitter();
  @Output() forgotPasswordEvent = new EventEmitter();
}
