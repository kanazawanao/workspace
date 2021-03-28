import { TopService } from './top.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'workspace-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  constructor(private router: Router, private topService: TopService) {}
  formGroup: FormGroup;

  ngOnInit(): void {
    this.formGroup = this.topService.generageFormGroup();
  }

  signInOrSignUp() {
    this.topService
      .isRegistedEmail(this.formGroup.controls['email'].value)
      .subscribe((result) => {
        if (result) {
          // ログイン画面へ繊維
          console.log('登録済みメールアドレス');
          this.router.navigate(['/login'], {
            queryParams: { email: this.formGroup.controls['email'].value },
          });
        } else {
          // 登録画面へ繊維
          console.log('未登録メールアドレス');
          this.router.navigate(['/signup'], {
            queryParams: { email: this.formGroup.controls['email'].value },
          });
        }
      });
  }
}
