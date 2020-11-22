import { usersData } from '../users.data';
import { EditType } from '@workspace/constants';
import { of } from 'rxjs';

export class MockUsersFacade {
  loaded$ = of();
  allUsers$ = of(usersData);
  selectedUsers$ = of();
  wokkUserEntry$ = of(usersData[1]);
  editMode$ = of(EditType.create);
  loadUsers() {}
  loadUpdateInitUsersEntry(userId: string) {}
  setEditerMode(editerMode: EditType) {}
}
