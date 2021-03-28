import { Inject, Injectable } from '@angular/core';
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
export class TopService {
  constructor(
    private formBuilder: FormBuilder,
    private httpRequestService: HttpRequestService,
    @Inject('apiUrl') private apiUrl: string
  ) {}
  constants = ApiConstant;

  generageFormGroup(): FormGroup {
    const formGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
    return formGroup;
  }

  isAuthenticated(): Observable<boolean> {
    const res = this.httpRequestService.get<boolean>({
      url: `${this.apiUrl}${this.constants.isAuthenticated}`,
    });
    return res;
  }

  isRegistedEmail(email: string): Observable<boolean> {
    const res = this.httpRequestService.post<boolean>({
      url: `${this.apiUrl}${this.constants.existEmail}`,
      body: { email },
    });
    return res;
  }
}
