import { UsersEntryModel } from '../users-entry.model';
import { Inject, Injectable } from '@angular/core';
import { IUser } from '@workspace/api-interfaces';
import { ApiConstant } from '@workspace/constants';
import { HttpRequestService } from '@workspace/shared-service';
import { Observable } from 'rxjs';

@Injectable()
export class UsersDataAccessService {
  constants = ApiConstant;
  constructor(
    private httpRequestService: HttpRequestService,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  fetchUsers(): Observable<IUser[]> {
    const res = this.httpRequestService.get<IUser[]>({
      url: `${this.apiUrl}${this.constants.users}`,
    });
    return res;
  }

  fetchUser(id: string): Observable<IUser> {
    var res = this.httpRequestService.get<IUser>({
      url: `${this.apiUrl}${this.constants.users}/${id}`,
    });
    return res;
  }

  postUser(user: UsersEntryModel): Observable<IUser> {
    var res = this.httpRequestService.post<IUser>({
      url: `${this.apiUrl}${this.constants.users}`,
      body: user,
    });
    return res;
  }

  updateUser(id: number, user: UsersEntryModel): Observable<IUser> {
    var res = this.httpRequestService.put<IUser>({
      url: `${this.apiUrl}${this.constants.users}/${id}`,
      body: user,
    });
    return res;
  }

  deleteUser(id: number) {
    var res = this.httpRequestService.delete({
      url: `${this.apiUrl}${this.constants.users}/${id}`,
    });
    return res;
  }
}
