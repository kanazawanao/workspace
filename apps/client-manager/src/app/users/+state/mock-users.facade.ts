import { EditType } from '@workspace/constants';
import { of } from 'rxjs';

export class MockUsersFacade {
  loaded$ = of();
  allUsers$ = of();
  selectedUsers$ = of();
  wokkUserEntry$ = of();
  editMode$ = of();

  loadUsers() {}
  loadUpdateInitUsersEntry(userId: string) {}
  setEditerMode(editerMode: EditType) {}
}
