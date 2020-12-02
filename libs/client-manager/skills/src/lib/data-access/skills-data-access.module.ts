import { SkillsDataAccessService } from './skills-data-access.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SkillsEffects } from './+state/skills.effects';
import { SkillsFacade } from './+state/skills.facade';
import * as fromSkills from './+state/skills.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromSkills.SKILLS_FEATURE_KEY, fromSkills.reducer),
    EffectsModule.forFeature([SkillsEffects]),
  ],
  providers: [SkillsFacade, SkillsDataAccessService],
})
export class SkillsDataAccessModule {}
