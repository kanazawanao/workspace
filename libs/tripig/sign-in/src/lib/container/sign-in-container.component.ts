import { SignInService } from '../sign-in.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'workspace-sign-in-container',
  templateUrl: './sign-in-container.component.html',
  styleUrls: ['./sign-in-container.component.scss'],
})
export class SignInContainerComponent implements OnInit {
  signInForm: FormGroup;
  constructor(
    private signInService: SignInService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.signInForm = this.signInService.generateForm(
      this.route.snapshot.queryParams['email']
    );
  }

  signInEventListener() {
    this.signInService.signIn(this.signInForm);
  }

  forgotPasswordEvent() {
    // TODO: パスワードは忘れた方はこちらページへ遷移
  }
}
