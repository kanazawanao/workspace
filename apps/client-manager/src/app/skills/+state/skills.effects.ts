import * as SkillsActions from './skills.actions';
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
          return this.skillsService
            .fetchSkills()
            .pipe(
              map((res) => SkillsActions.loadSkillsSuccess({ skills: res }))
            );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return SkillsActions.loadSkillsFailure({ error });
        },
      })
    )
  );

  loadUpdateInitSkillEntry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SkillsActions.loadUpdateInitSkillEntry),
      fetch({
        run: (action) => {
          return this.skillsService.fetchSkill(action.skillId).pipe(
            map((res) =>
              SkillsActions.loadUpdateInitSkillEntrySuccess({
                initSkillEntry: res,
              })
            )
          );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return SkillsActions.loadUpdateInitSkillEntryFailure({ error });
        },
      })
    )
  );

  createSkill$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SkillsActions.createSkill),
      fetch({
        run: (action) => {
          return this.skillsService
            .postSkill(action.skillEntry)
            .pipe(
              map((res) =>
                SkillsActions.createSkillSuccess({ skillEntry: res })
              )
            );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return SkillsActions.createSkillFailure({ error });
        },
      })
    )
  );

  updateSkill$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SkillsActions.updateSkill),
      fetch({
        run: (action) => {
          return this.skillsService
            .updateSkill(action.id, action.skillEntry)
            .pipe(
              map((res) =>
                SkillsActions.updateSkillSuccess({ skillEntry: res })
              )
            );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return SkillsActions.updateSkillFailure({ error });
        },
      })
    )
  );
  constructor(
    private actions$: Actions,
    private skillsService: SkillsService
  ) {}
}
