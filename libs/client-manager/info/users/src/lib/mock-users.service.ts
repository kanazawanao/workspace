import { UsersEntryModel } from './users-entry.model';
import { FormGroup } from '@angular/forms';

export class MockUsersService {
  constructor() {}

  generateFormGroup(formData: UsersEntryModel): FormGroup {
    return new FormGroup({});
  }
}
