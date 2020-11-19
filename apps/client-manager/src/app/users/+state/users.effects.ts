import * as UsersActions from './users.actions';
import * as fromUsers from './users.reducer';
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
          // Your custom service 'load' logic goes here. For now just return a success action...
          return this.usersService
            .fetchUsersInfo()
            .pipe(map((res) => UsersActions.loadUsersSuccess({ users: res })));
        },

        onError: (action, error) => {
          console.error('Error', error);
          return UsersActions.loadUsersFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions, private usersService: UsersService) {}
}
