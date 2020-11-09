import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromUsersEntry from './users-entry.reducer';
import * as UsersEntrySelectors from './users-entry.selectors';

@Injectable()
export class UsersEntryFacade {
  loaded$ = this.store.pipe(select(UsersEntrySelectors.getUsersEntryLoaded));
  allUsersEntry$ = this.store.pipe(
    select(UsersEntrySelectors.getAllUsersEntry)
  );
  selectedUsersEntry$ = this.store.pipe(
    select(UsersEntrySelectors.getSelected)
  );

  constructor(private store: Store<fromUsersEntry.UsersEntryPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
