import { SignInService } from '../sign-in.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'workspace-sign-in-container',
  templateUrl: './sign-in-container.component.html',
  styleUrls: ['./sign-in-container.component.scss'],
})
export class SignInContainerComponent implements OnInit {
  signInForm: FormGroup;
  constructor(private signInService: SignInService) {}

  ngOnInit(): void {
    this.signInForm = this.signInService.generateForm();
  }

  signInEventListener() {
    this.signInService.signIn(this.signInForm);
  }
}
