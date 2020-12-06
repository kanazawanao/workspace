import * as ClientManagerActions from './client-manager.actions';
import * as fromClientManager from './client-manager.reducer';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

@Injectable()
export class ClientManagerEffects {
  loadClientManager$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClientManagerActions.loadClientManager),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return ClientManagerActions.loadClientManagerSuccess({
            clientManager: [],
          });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return ClientManagerActions.loadClientManagerFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
