import * as UsersActions from './users.actions';
import { UsersEffects } from './users.effects';
import { MockUsersDataAccessService } from '../mock-users-data-access.service';
import { UsersDataAccessService } from '../users-data-access.service';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { DataPersistence, NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';
import { usersData } from '../users.data';

describe('UsersEffects', () => {
  let actions: Observable<any>;
  let effects: UsersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        UsersEffects,
        DataPersistence,
        {
          provide: UsersDataAccessService,
          useClass: MockUsersDataAccessService,
        },
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(UsersEffects);
  });

  describe('loadUsers$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: UsersActions.loadUsers() });

      const expected = hot('-a-|', {
        a: UsersActions.loadUsersSuccess({ users: usersData }),
      });

      expect(effects.loadUsers$).toBeObservable(expected);
    });
  });
});
