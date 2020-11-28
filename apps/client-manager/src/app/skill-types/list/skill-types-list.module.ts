import { SkillTypesListContainerComponent } from './container/skill-types-list-container.component';
import { SkillTypesListPresenterComponent } from './presenter/skill-types-list-presenter.component';
import { SkillTypesListRoutingModule } from './skill-types-list-routing.module';
import { SkillTypesListGuard } from './skill-types-list.guard';
import { SkillTypesService } from '../skill-types.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UiTableModule } from '@workspace/ui';
import * as fromSkillTypes from '../+state/skill-types.reducer';
import { SkillTypesEffects } from '../+state/skill-types.effects';
import { SkillTypesFacade } from '../+state/skill-types.facade';

@NgModule({
  declarations: [
    SkillTypesListPresenterComponent,
    SkillTypesListContainerComponent,
  ],
  imports: [
    CommonModule,
    SkillTypesListRoutingModule,
    UiTableModule,
    StoreModule.forFeature(
      fromSkillTypes.SKILL_TYPES_FEATURE_KEY,
      fromSkillTypes.reducer
    ),
    EffectsModule.forFeature([SkillTypesEffects]),
  ],
  providers: [SkillTypesFacade, SkillTypesService, SkillTypesListGuard],
})
export class SkillTypesListModule {}
