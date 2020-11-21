import * as UsersActions from './users.actions';
import { UsersService } from '../users.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadUsers),
      fetch({
        run: (action) => {
          return this.usersService
            .fetchUsers()
            .pipe(map((res) => UsersActions.loadUsersSuccess({ users: res })));
        },
        onError: (action, error) => {
          console.error('Error', error);
          return UsersActions.loadUsersFailure({ error });
        },
      })
    )
  );

  loadUpdateInitUserEntry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadUpdateInitUserEntry),
      fetch({
        run: (action) => {
          return this.usersService.fetchUser(action.userId).pipe(
            map((res) =>
              UsersActions.loadUpdateInitUserEntrySuccess({
                initUserEntry: res,
              })
            )
          );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return UsersActions.loadUpdateInitUserEntryFailure({ error });
        },
      })
    )
  );
  constructor(private actions$: Actions, private usersService: UsersService) {}
}
