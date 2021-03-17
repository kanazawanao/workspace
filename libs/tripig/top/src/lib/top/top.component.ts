import { Component, OnInit } from '@angular/core';
import { FireAuthService } from '@workspace/shared-service';

@Component({
  selector: 'workspace-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  constructor(private authService: FireAuthService) {}

  ngOnInit(): void {}

  signInOrSignUp() {}

  googleSignIn() {
    this.authService.googleSignIn();
  }

  facebookSignIn() {
    this.authService.facebookSignIn().then(() => {
      // ユーザー登録する
    });
  }

  twitterSignIn() {
    this.authService.twitterSignIn();
  }
  appleSignIn() {}
}
