import * as UsersEntryActions from './users-entry.actions';
import * as fromUsersEntry from './users-entry.reducer';
import * as UsersEntrySelectors from './users-entry.selectors';
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
  constructor(private store: Store<fromUsersEntry.UsersEntryPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  loadUpdateInitSalesEntry(userId: string) {
    this.dispatch(UsersEntryActions.loadUpdateInitUserEntry({ userId }));
  }
}
