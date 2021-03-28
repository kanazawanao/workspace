import { Inject, Injectable } from '@angular/core';
import { IUser } from '@workspace/api-interfaces';
import { ApiConstant } from '@workspace/constants';
import { HttpRequestService } from '@workspace/shared-service';
import { Observable } from 'rxjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Injectable()
export class SignUpService {
  constructor(
    private formBuilder: FormBuilder,
    private httpRequestService: HttpRequestService,
    @Inject('apiUrl') private apiUrl: string
  ) {}
  constants = ApiConstant;

  generateFormGroup(): FormGroup {
    const formGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      birthDay: new FormControl(''),
      graduationDate: new FormControl(''),
    });
    return formGroup;
  }

  signUp(user: IUser): Observable<any> {
    const res = this.httpRequestService.post<any>({
      url: `${this.apiUrl}${this.constants.users}`,
      body: user,
    });
    return res;
  }
}
