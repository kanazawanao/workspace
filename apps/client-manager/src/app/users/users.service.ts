import { Inject, Injectable } from '@angular/core';
import { IUser } from '@workspace/api-interfaces';
import { HttpRequestService } from '@workspace/shared-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    private httpRequestService: HttpRequestService,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  fetchUsersInfo(): Observable<IUser[]> {
    const res = this.httpRequestService.get<IUser[]>({
      url: `${this.apiUrl}/users`,
    });
    return res;
  }

  fetchUserInfo(id: string): Observable<IUser> {
    var res = this.httpRequestService.get<IUser>({
      url: `${this.apiUrl}/users/${id}`,
    });
    return res;
  }
}
