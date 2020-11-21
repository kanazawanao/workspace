import { SkillsListContainerComponent } from './container/skills-list-container.component';
import { SkillsListPresenterComponent } from './presenter/skills-list-presenter.component';
import { SkillsListRoutingModule } from './skills-list-routing.module';
import { SkillsListGuard } from './skills-list.guard';
import { SkillsService } from '../skills.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UiTableModule } from '@workspace/ui';
import { SkillsEffects } from '../+state/skills.effects';
import * as fromSkills from '../+state/skills.reducer';
import { SkillsFacade } from '../+state/skills.facade';

@NgModule({
  declarations: [SkillsListPresenterComponent, SkillsListContainerComponent],
  imports: [
    CommonModule,
    SkillsListRoutingModule,
    UiTableModule,
    StoreModule.forFeature(fromSkills.SKILLS_FEATURE_KEY, fromSkills.reducer),
    EffectsModule.forFeature([SkillsEffects]),
  ],
  exports: [SkillsListContainerComponent],
  providers: [SkillsService, SkillsFacade, SkillsListGuard],
})
export class SkillsListModule {}
