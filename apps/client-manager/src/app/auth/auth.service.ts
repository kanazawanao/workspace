import { Inject, Injectable } from '@angular/core';
import { ApiConstant } from '@workspace/constants';
import { HttpRequestService } from '@workspace/shared-service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constants = ApiConstant;
  constructor(
    private httpRequestService: HttpRequestService,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  isAuthenticated(): Observable<boolean> {
    const res = this.httpRequestService.get<boolean>({
      url: `${this.apiUrl}${this.constants.authcheck}`,
    });
    return res;
  }
}
