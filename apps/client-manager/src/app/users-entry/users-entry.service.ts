import { Inject, Injectable } from '@angular/core';
import { IUser } from '@workspace/api-interfaces';
import { HttpRequestService } from '@workspace/shared-service';

@Injectable({
  providedIn: 'root',
})
export class UsersEntryService {
  constructor(
    private httpRequestService: HttpRequestService,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  postUser(user: IUser) {
    var res = this.httpRequestService.post({
      url: `${this.apiUrl}/users`,
      body: user,
    });
    return res;
  }
}
