import { UsersEntryModel } from './entry/users-entry-model';
import { FormGroup } from '@angular/forms';
import { IUser } from '@workspace/api-interfaces';
import { Observable, of } from 'rxjs';

export class MockUsersService {
  constructor() {}

  generateFormGroup(formData: UsersEntryModel): FormGroup {
    return new FormGroup({});
  }

  fetchUsers(): Observable<IUser[]> {
    return of([]);
  }

  fetchUser(id: string): Observable<IUser> {
    return of();
  }

  postUser(user: UsersEntryModel): Observable<IUser> {
    return of();
  }

  updateUser(id: number, user: UsersEntryModel): Observable<IUser> {
    return of();
  }
}
