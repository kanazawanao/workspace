import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromSkillsEntry from './skills-entry.reducer';
import * as SkillsEntryActions from './skills-entry.actions';

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

  constructor(private actions$: Actions) {}
}
