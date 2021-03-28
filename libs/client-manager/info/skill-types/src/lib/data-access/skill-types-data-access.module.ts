import { SkillTypesDataAccessService } from './skill-types-data-access.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SkillTypesEffects } from './+state/skill-types.effects';
import { SkillTypesFacade } from './+state/skill-types.facade';
import * as fromSkillTypes from './+state/skill-types.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromSkillTypes.SKILL_TYPES_FEATURE_KEY,
      fromSkillTypes.reducer
    ),
    EffectsModule.forFeature([SkillTypesEffects]),
  ],
  providers: [SkillTypesFacade, SkillTypesDataAccessService],
})
export class SkillTypesDataAccessModule {}
