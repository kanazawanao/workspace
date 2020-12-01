import { usersData } from './users.data';
import { FormGroup } from '@angular/forms';
import { IUser } from '@workspace/api-interfaces';
import { UsersEntryModel } from '@workspace/client-manager/models';
import { Observable, of } from 'rxjs';

export class MockUsersService {
  constructor() {}

  generateFormGroup(formData: UsersEntryModel): FormGroup {
    return new FormGroup({});
  }

  fetchUsers(): Observable<IUser[]> {
    return of(usersData);
  }

  fetchUser(id: string): Observable<IUser> {
    return of(usersData[1]);
  }

  postUser(user: UsersEntryModel): Observable<IUser> {
    return of(usersData[1]);
  }

  updateUser(id: number, user: UsersEntryModel): Observable<IUser> {
    return of(usersData[1]);
  }
}
