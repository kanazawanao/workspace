import * as fromClientManager from './client-manager.reducer';
import * as ClientManagerSelectors from './client-manager.selectors';
import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';

@Injectable()
export class ClientManagerFacade {
  loaded$ = this.store.pipe(
    select(ClientManagerSelectors.getClientManagerLoaded)
  );
  allClientManager$ = this.store.pipe(
    select(ClientManagerSelectors.getAllClientManager)
  );
  selectedClientManager$ = this.store.pipe(
    select(ClientManagerSelectors.getSelected)
  );

  constructor(
    private store: Store<fromClientManager.ClientManagerPartialState>
  ) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
