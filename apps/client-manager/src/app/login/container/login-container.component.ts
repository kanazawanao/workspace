import { BaseComponent } from '../../base/base.component';
import { LoginService } from '../login.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'client-manager-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
})
export class LoginContainerComponent
  extends BaseComponent
  implements OnInit, OnDestroy {
  formGroup: FormGroup;
  constructor(private loginService: LoginService) {
    super();
  }

  ngOnInit(): void {
    this.formGroup = this.loginService.generateFormGroup();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  loginEventListner() {
    this.loginService
      .login({
        email: this.formGroup.get('email').value,
        password: this.formGroup.get('password').value,
      })
      .pipe(takeUntil(this.unsubscribeObservable$))
      .subscribe();
  }
}
