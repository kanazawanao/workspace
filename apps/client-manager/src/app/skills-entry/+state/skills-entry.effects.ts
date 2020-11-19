import * as SkillsEntryActions from './skills-entry.actions';
import * as fromSkillsEntry from './skills-entry.reducer';
import { SkillsEntryService } from '../skills-entry.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs/operators';

@Injectable()
export class SkillsEntryEffects {
  loadSkillsEntry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SkillsEntryActions.loadSkillsEntry),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return SkillsEntryActions.loadSkillsEntrySuccess({ skillsEntry: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return SkillsEntryActions.loadSkillsEntryFailure({ error });
        },
      })
    )
  );

  loadUpdateInitSkillEntry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SkillsEntryActions.loadUpdateInitSkillEntry),
      fetch({
        run: (action) => {
          return this.skillsEntryService.fetchUser(action.skillId).pipe(
            map((res) =>
              SkillsEntryActions.loadUpdateInitSkillEntrySuccess({
                initSkillEntry: res,
              })
            )
          );
        },

        onError: (action, error) => {
          console.error('Error', error);
          return SkillsEntryActions.loadUpdateInitSkillEntryFailure({ error });
        },
      })
    )
  );

  constructor(
    private actions$: Actions,
    private skillsEntryService: SkillsEntryService
  ) {}
}
