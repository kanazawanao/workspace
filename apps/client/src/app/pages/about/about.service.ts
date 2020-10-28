import { Inject, Injectable } from '@angular/core';
import { IUser } from '@workspace/api-interfaces';
import { HttpRequestService } from '@workspace/shared-service';
import { Observable } from 'rxjs';

@Injectable()
export class AboutService {
  constructor(
    private httpRequestService: HttpRequestService,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  fetchUserInfo(): Observable<IUser> {
    return this.httpRequestService.get<IUser>({ url: `${this.apiUrl}/users` });
  }
}
