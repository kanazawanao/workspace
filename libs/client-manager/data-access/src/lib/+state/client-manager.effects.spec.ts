import * as ClientManagerActions from './client-manager.actions';
import { ClientManagerEffects } from './client-manager.effects';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { DataPersistence, NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

describe('ClientManagerEffects', () => {
  let actions: Observable<any>;
  let effects: ClientManagerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ClientManagerEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ClientManagerEffects);
  });

  describe('loadClientManager$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ClientManagerActions.loadClientManager() });

      const expected = hot('-a-|', {
        a: ClientManagerActions.loadClientManagerSuccess({ clientManager: [] }),
      });

      expect(effects.loadClientManager$).toBeObservable(expected);
    });
  });
});
