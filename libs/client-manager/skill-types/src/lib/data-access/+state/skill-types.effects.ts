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

  createSkillType$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SkillTypesActions.createSkillType),
      fetch({
        run: (action) => {
          return this.skillTypesDataAccessService
            .postSkill(action.skillTypeEntry)
            .pipe(
              map((res) =>
                SkillTypesActions.createSkillTypeSuccess({
                  skillTypeEntry: res,
                })
              )
            );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return SkillTypesActions.createSkillTypeFailure({ error });
        },
      })
    )
  );

  updateSkillType$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SkillTypesActions.updateSkillType),
      fetch({
        run: (action) => {
          return this.skillTypesDataAccessService
            .updateSkill(action.id, action.skillTypeEntry)
            .pipe(
              map((res) =>
                SkillTypesActions.updateSkillTypeSuccess({
                  skillTypeEntry: res,
                })
              )
            );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return SkillTypesActions.updateSkillTypeFailure({ error });
        },
      })
    )
  );

  deleteSkill$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SkillTypesActions.deleteSkillType),
      fetch({
        run: (action) => {
          return this.skillTypesDataAccessService
            .deleteSkill(action.id)
            .pipe(map((res) => SkillTypesActions.deleteSkillTypeSuccess()));
        },
        onError: (action, error) => {
          console.error('Error', error);
          console.log(`${action.id}の削除に失敗しました。`);
          return SkillTypesActions.deleteSkillTypeFailure({ error });
        },
      })
    )
  );
  constructor(
    private actions$: Actions,
    private skillTypesDataAccessService: SkillTypesDataAccessService
  ) {}
}
