import * as SkillTypesActions from './skill-types.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

@Injectable()
export class SkillTypesEffects {
  loadSkillTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SkillTypesActions.loadSkillTypes),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return SkillTypesActions.loadSkillTypesSuccess({ skillTypes: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return SkillTypesActions.loadSkillTypesFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
