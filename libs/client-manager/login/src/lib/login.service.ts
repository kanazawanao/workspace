import { Inject, Injectable } from '@angular/core';
import { ILogin, IToken } from '@workspace/api-interfaces';
import { ApiConstant } from '@workspace/constants';
import { HttpRequestService } from '@workspace/shared-service';
import { map } from 'rxjs/operators';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Injectable()
export class LoginService {
  constants = ApiConstant;
  constructor(
    private formBuilder: FormBuilder,
    private httpRequestService: HttpRequestService,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  generateFormGroup(): FormGroup {
    const formGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
    return formGroup;
  }

  login(login: ILogin) {
    const res = this.httpRequestService
      .post<IToken>({
        url: `${this.apiUrl}${this.constants.login}`,
        body: login,
      })
      .pipe(
        map((x) => {
          this.httpRequestService.token = x.accessToken;
        })
      );
    return res;
  }
}
