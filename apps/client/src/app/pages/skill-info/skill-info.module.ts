import { SkillInfoContainerComponent } from './container/skill-info-container.component';
import { SkillInfoPresenterComponent } from './presenter/skill-info-presenter.component';
import { SkillInfoRoutingModule } from './skill-info-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UiTableModule } from '@workspace/ui';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromSkills from './+state/skills.reducer';
import { SkillsEffects } from './+state/skills.effects';
import { SkillsFacade } from './+state/skills.facade';

@NgModule({
  declarations: [SkillInfoPresenterComponent, SkillInfoContainerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiTableModule,
    SkillInfoRoutingModule,
    StoreModule.forFeature(fromSkills.SKILLS_FEATURE_KEY, fromSkills.reducer),
    EffectsModule.forFeature([SkillsEffects]),
  ],
  providers: [SkillsFacade],
})
export class SkillInfoModule {}
