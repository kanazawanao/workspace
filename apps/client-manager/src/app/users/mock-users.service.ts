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
}
