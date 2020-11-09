import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromUsersEntry from './users-entry.reducer';
import * as UsersEntryActions from './users-entry.actions';

@Injectable()
export class UsersEntryEffects {
  loadUsersEntry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersEntryActions.loadUsersEntry),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return UsersEntryActions.loadUsersEntrySuccess({ usersEntry: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return UsersEntryActions.loadUsersEntryFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
