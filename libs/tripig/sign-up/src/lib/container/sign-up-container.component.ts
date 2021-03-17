import { SignUpService } from '../sign-up.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'workspace-sign-up-container',
  templateUrl: './sign-up-container.component.html',
  styleUrls: ['./sign-up-container.component.scss'],
})
export class SignUpContainerComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(
    private signUpService: SignUpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.signUpService.generateForm(
      this.route.snapshot.queryParams['email']
    );
  }

  signUp() {
    this.signUpService.signUp(this.signUpForm);
  }
}
