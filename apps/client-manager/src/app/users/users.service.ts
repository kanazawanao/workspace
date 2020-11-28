import { UsersEntryModel } from './entry/users-entry.model';
import { Inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IUser } from '@workspace/api-interfaces';
import { ApiConstant } from '@workspace/constants';
import { HttpRequestService } from '@workspace/shared-service';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  constants = ApiConstant;
  constructor(
    private formBuilder: FormBuilder,
    private httpRequestService: HttpRequestService,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  generateFormGroup(): FormGroup {
    return this.formBuilder.group(new UsersEntryModel());
  }

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
}
