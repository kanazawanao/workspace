import { SignUpService } from '../sign-up.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'workspace-sign-up-container',
  templateUrl: './sign-up-container.component.html',
  styleUrls: ['./sign-up-container.component.scss'],
})
export class SignUpContainerComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private signUpService: SignUpService) {}

  ngOnInit(): void {
    this.signUpForm = this.signUpService.generateForm();
  }

  signUp() {
    this.signUpService.signUp(this.signUpForm);
  }
}
