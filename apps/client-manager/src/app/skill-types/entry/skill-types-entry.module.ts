import { SkillTypesEntryContainerComponent } from './container/skill-types-entry-container.component';
import { SkillTypesEntryPresenterComponent } from './presenter/skill-types-entry-presenter.component';
import { SkillTypesEntryRoutingModule } from './skill-types-entry-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromSkillTypes from '../+state/skill-types.reducer';
import { SkillTypesEffects } from '../+state/skill-types.effects';

@NgModule({
  declarations: [
    SkillTypesEntryContainerComponent,
    SkillTypesEntryPresenterComponent,
  ],
  imports: [
    CommonModule,
    SkillTypesEntryRoutingModule,
    StoreModule.forFeature(
      fromSkillTypes.SKILL_TYPES_FEATURE_KEY,
      fromSkillTypes.reducer
    ),
    EffectsModule.forFeature([SkillTypesEffects]),
  ],
})
export class SkillTypesEntryModule {}
