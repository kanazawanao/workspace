import * as SkillsActions from './skills.actions';
import * as fromSkills from './skills.reducer';
import { SkillsService } from '../skills.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs/operators';

@Injectable()
export class SkillsEffects {
  loadSkills$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SkillsActions.loadSkills),
      fetch({
        run: (action) => {
          return this.skillsService.fetchSkillsInfo().pipe(
            map((res) =>
              SkillsActions.loadSkillsSuccess({
                skills: res,
              })
            )
          );
        },

        onError: (action, error) => {
          console.error('Error', error);
          return SkillsActions.loadSkillsFailure({ error });
        },
      })
    )
  );

  constructor(
    private actions$: Actions,
    private skillsService: SkillsService
  ) {}
}
