import { Inject, Injectable } from '@angular/core';
import { IUser } from '@workspace/api-interfaces';
import { HttpRequestService } from '@workspace/shared-service';
import { Observable } from 'rxjs';

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

  fetchUser(id: string): Observable<IUser> {
    var res = this.httpRequestService.get<IUser>({
      url: `${this.apiUrl}/users/${id}`,
    });
    return res;
  }
}
