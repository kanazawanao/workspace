import * as SkillTypesActions from './skill-types.actions';
import { SkillTypesDataAccessService } from '../skill-types-data-access.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs/operators';

@Injectable()
export class SkillTypesEffects {
  loadSkillTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SkillTypesActions.loadSkillTypes),
      fetch({
        run: (action) => {
          return this.skillTypesDataAccessService
            .fetchSkills()
            .pipe(
              map((res) =>
                SkillTypesActions.loadSkillTypesSuccess({ skillTypes: res })
              )
            );
        },

        onError: (action, error) => {
          console.error('Error', error);
          return SkillTypesActions.loadSkillTypesFailure({ error });
        },
      })
    )
  );

  loadUpdateInitSkillTypeEntry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SkillTypesActions.loadUpdateInitSkillTypeEntry),
      fetch({
        run: (action) => {
          return this.skillTypesDataAccessService
            .fetchSkill(action.skillTypeId)
            .pipe(
              map((res) =>
                SkillTypesActions.loadUpdateInitSkillTypeEntrySuccess({
                  initSkillTypeEntry: res,
                })
              )
            );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return SkillTypesActions.loadUpdateInitSkillTypeEntryFailure({
            error,
          });
        },
      })
    )
  );

  constructor(
    private actions$: Actions,
    private skillTypesDataAccessService: SkillTypesDataAccessService
  ) {}
}
