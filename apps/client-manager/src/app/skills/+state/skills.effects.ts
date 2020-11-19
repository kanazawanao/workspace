import * as SkillsActions from './skills.actions';
import * as fromSkills from './skills.reducer';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

@Injectable()
export class SkillsEffects {
  loadSkills$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SkillsActions.loadSkills),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return SkillsActions.loadSkillsSuccess({ skills: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return SkillsActions.loadSkillsFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
