import { UsersEntryModel } from './entry/users-entry-model';
import { Inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IUser } from '@workspace/api-interfaces';
import { HttpRequestService } from '@workspace/shared-service';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(
    private formBuilder: FormBuilder,
    private httpRequestService: HttpRequestService,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  generateFormGroup(formData: UsersEntryModel): FormGroup {
    const formGroup = this.formBuilder.group(formData);
    return formGroup;
  }

  fetchUsers(): Observable<IUser[]> {
    const res = this.httpRequestService.get<IUser[]>({
      url: `${this.apiUrl}/users`,
    });
    return res;
  }

  fetchUser(id: string): Observable<IUser> {
    var res = this.httpRequestService.get<IUser>({
      url: `${this.apiUrl}/users/${id}`,
    });
    return res;
  }

  postUser(user: UsersEntryModel): Observable<IUser> {
    var res = this.httpRequestService.post<IUser>({
      url: `${this.apiUrl}/users`,
      body: user,
    });
    return res;
  }

  updateUser(id: number, user: UsersEntryModel): Observable<IUser> {
    var res = this.httpRequestService.put<IUser>({
      url: `${this.apiUrl}/users${id}`,
      body: user,
    });
    return res;
  }
}
