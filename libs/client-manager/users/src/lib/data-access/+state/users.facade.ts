import * as UsersActions from './users.actions';
import * as fromUsers from './users.reducer';
import * as UsersSelectors from './users.selectors';
import { UsersEntryModel } from '../../users-entry.model';
import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { EditType } from '@workspace/constants';

@Injectable()
export class UsersFacade {
  loaded$ = this.store.pipe(select(UsersSelectors.getUsersLoaded));
  allUsers$ = this.store.pipe(select(UsersSelectors.getAllUsers));
  selectedUsers$ = this.store.pipe(select(UsersSelectors.getSelected));

  wokkUserEntry$ = this.store.pipe(select(UsersSelectors.getWorkUserEntry));
  editMode$ = this.store.pipe(select(UsersSelectors.getEditerMode));
  constructor(private store: Store<fromUsers.UsersPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  loadUsers() {
    this.dispatch(UsersActions.loadUsers());
  }

  loadUpdateInitUsersEntry(userId: string) {
    this.setEditerMode(EditType.update);
    this.dispatch(UsersActions.loadUpdateInitUserEntry({ userId }));
  }

  createUSer(userEntry: UsersEntryModel) {
    this.dispatch(UsersActions.createUser({ userEntry }));
  }

  updateUser(id: number, userEntry: UsersEntryModel) {
    this.dispatch(UsersActions.updateUser({ id, userEntry }));
  }

  deleteUser(id: number) {
    this.dispatch(UsersActions.deleteUser({ id }));
  }

  setEditerMode(editerMode: EditType) {
    this.store.dispatch(UsersActions.setEditerMode({ editerMode }));
  }
}
