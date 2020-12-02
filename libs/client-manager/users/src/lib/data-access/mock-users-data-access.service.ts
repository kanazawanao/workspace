import { usersData } from './users.data';
import { UsersEntryModel } from '../users-entry.model';
import { FormGroup } from '@angular/forms';
import { IUser } from '@workspace/api-interfaces';
import { Observable, of } from 'rxjs';

export class MockUsersDataAccessService {
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
