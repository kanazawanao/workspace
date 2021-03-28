import { SignUpControlName } from './sign-up-control-name';
import { SignUpService } from './sign-up.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'workspace-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(private signUpService: SignUpService) {}

  formGroup: FormGroup;
  controlName = SignUpControlName;

  ngOnInit(): void {
    this.formGroup = this.signUpService.generateFormGroup();
  }

  signUpEvent() {}
}
