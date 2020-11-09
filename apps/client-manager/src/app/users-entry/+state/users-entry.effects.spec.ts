import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { UsersEntryEffects } from './users-entry.effects';
import * as UsersEntryActions from './users-entry.actions';

describe('UsersEntryEffects', () => {
  let actions: Observable<any>;
  let effects: UsersEntryEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        UsersEntryEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(UsersEntryEffects);
  });

  describe('loadUsersEntry$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: UsersEntryActions.loadUsersEntry() });

      const expected = hot('-a-|', {
        a: UsersEntryActions.loadUsersEntrySuccess({ usersEntry: [] }),
      });

      expect(effects.loadUsersEntry$).toBeObservable(expected);
    });
  });
});
