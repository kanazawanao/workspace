import * as UsersActions from './users.actions';
import { UsersEffects } from './users.effects';
import { MockUsersService } from '../mock-users.service';
import { UsersService } from '../users.service';
import { async, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { DataPersistence, NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';





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
          provide: UsersService,
          useClass: MockUsersService,
        },
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(UsersEffects);
  });

  describe('loadUsers$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: UsersActions.loadUsers() });

      const expected = hot('-a-|', {
        a: UsersActions.loadUsersSuccess({ users: [] }),
      });

      expect(effects.loadUsers$).toBeObservable(expected);
    });
  });
});
