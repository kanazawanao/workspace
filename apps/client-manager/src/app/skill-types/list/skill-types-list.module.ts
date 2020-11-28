import { SkillTypesListContainerComponent } from './container/skill-types-list-container.component';
import { SkillTypesListPresenterComponent } from './presenter/skill-types-list-presenter.component';
import { SkillTypesListRoutingModule } from './skill-types-list-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromSkillTypes from '../+state/skill-types.reducer';
import { SkillTypesEffects } from '../+state/skill-types.effects';

@NgModule({
  declarations: [
    SkillTypesListPresenterComponent,
    SkillTypesListContainerComponent,
  ],
  imports: [
    CommonModule,
    SkillTypesListRoutingModule,
    StoreModule.forFeature(
      fromSkillTypes.SKILL_TYPES_FEATURE_KEY,
      fromSkillTypes.reducer
    ),
    EffectsModule.forFeature([SkillTypesEffects]),
  ],
})
export class SkillTypesListModule {}
