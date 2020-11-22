import { SkillsEntryContainerComponent } from './container/skills-entry-container.component';
import { SkillsEntryPresenterComponent } from './presenter/skills-entry-presenter.component';
import { SkillsEntryRoutingModule } from './skills-entry-routing.module';
import { SkillsEntryGuard } from './skills-entry.guard';
import { SkillsService } from '../skills.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UiInputModule } from '@workspace/ui';
import { SkillsEffects } from '../+state/skills.effects';
import * as fromSkills from '../+state/skills.reducer';
import { SkillsFacade } from '../+state/skills.facade';

@NgModule({
  declarations: [SkillsEntryContainerComponent, SkillsEntryPresenterComponent],
  imports: [
    CommonModule,
    SkillsEntryRoutingModule,
    ReactiveFormsModule,
    UiInputModule,
    MatButtonModule,
    StoreModule.forFeature(fromSkills.SKILLS_FEATURE_KEY, fromSkills.reducer),
    EffectsModule.forFeature([SkillsEffects]),
  ],
  exports: [SkillsEntryContainerComponent],
  providers: [SkillsService, SkillsFacade, SkillsEntryGuard],
})
export class SkillsEntryModule {}
