import * as UsersEntryActions from './users-entry.actions';
import { UsersEntryService } from '../users-entry.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs/operators';

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

  loadUpdateInitUserEntry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersEntryActions.loadUpdateInitUserEntry),
      fetch({
        run: (action) => {
          return this.usersEntryService.fetchUser(action.userId).pipe(
            map((res) =>
              UsersEntryActions.loadUpdateInitUserEntrySuccess({
                initUserEntry: res,
              })
            )
          );
        },

        onError: (action, error) => {
          console.error('Error', error);
          return UsersEntryActions.loadUpdateInitUserEntryFailure({ error });
        },
      })
    )
  );

  constructor(
    private actions$: Actions,
    private usersEntryService: UsersEntryService
  ) {}
}
