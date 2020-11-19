import * as UsersEntryActions from './users-entry.actions';
import * as fromUsersEntry from './users-entry.reducer';
import * as UsersEntrySelectors from './users-entry.selectors';
import { EditType } from '../edit-type';
import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';

@Injectable()
export class UsersEntryFacade {
  loaded$ = this.store.pipe(select(UsersEntrySelectors.getUsersEntryLoaded));
  allUsersEntry$ = this.store.pipe(
    select(UsersEntrySelectors.getAllUsersEntry)
  );
  selectedUsersEntry$ = this.store.pipe(
    select(UsersEntrySelectors.getSelected)
  );
  wokkUserEntry$ = this.store.pipe(
    select(UsersEntrySelectors.getWorkUserEntry)
  );
  editMode$ = this.store.pipe(select(UsersEntrySelectors.getEditerMode));

  constructor(private store: Store<fromUsersEntry.UsersEntryPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  loadUpdateInitUsersEntry(userId: string) {
    this.setEditerMode(EditType.create);
    this.dispatch(UsersEntryActions.loadUpdateInitUserEntry({ userId }));
  }

  setEditerMode(editerMode: EditType) {
    this.store.dispatch(UsersEntryActions.setEditerMode({ editerMode }));
  }
}
