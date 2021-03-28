import * as UsersActions from './users.actions';
import { UsersDataAccessService } from '../users-data-access.service';
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
          return this.usersDataAccessService
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
          return this.usersDataAccessService.fetchUser(action.userId).pipe(
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

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.createUser),
      fetch({
        run: (action) => {
          return this.usersDataAccessService
            .postUser(action.userEntry)
            .pipe(
              map((res) => UsersActions.createUserSuccess({ userEntry: res }))
            );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return UsersActions.createUserFailure({ error });
        },
      })
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.updateUser),
      fetch({
        run: (action) => {
          return this.usersDataAccessService
            .updateUser(action.id, action.userEntry)
            .pipe(
              map((res) => UsersActions.updateUserSuccess({ userEntry: res }))
            );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return UsersActions.updateUserFailure({ error });
        },
      })
    )
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.deleteUser),
      fetch({
        run: (action) => {
          return this.usersDataAccessService
            .deleteUser(action.id)
            .pipe(map((res) => UsersActions.deleteUserSuccess()));
        },
        onError: (action, error) => {
          console.error('Error', error);
          return UsersActions.deleteUserFailure({ error });
        },
      })
    )
  );

  constructor(
    private actions$: Actions,
    private usersDataAccessService: UsersDataAccessService
  ) {}
}
