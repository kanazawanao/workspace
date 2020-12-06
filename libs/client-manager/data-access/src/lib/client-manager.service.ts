import { Inject, Injectable } from '@angular/core';
import { ILogin, IToken } from '@workspace/api-interfaces';
import { ApiConstant } from '@workspace/constants';
import { HttpRequestService } from '@workspace/shared-service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ClientManagerService {
  constants = ApiConstant;
  constructor(
    private httpRequestService: HttpRequestService,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  login(login: ILogin): Observable<IToken> {
    const res = this.httpRequestService
      .post<IToken>({
        url: `${this.apiUrl}${this.constants.login}`,
        body: login,
      })
      .pipe(
        map((x) => {
          this.httpRequestService.token = x.accessToken;
          return x;
        })
      );
    return res;
  }
}
