import { SkillsEntryContainerComponent } from './container/skills-entry-container.component';
import { SkillsEntryPresenterComponent } from './presenter/skills-entry-presenter.component';
import { SkillsEntryGuard } from './skills-entry.guard';
import { SkillsDataAccessModule } from '../data-access/skills-data-access.module';
import { SkillsService } from '../skills.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { UiInputModule, UiSelectModule } from '@workspace/ui';
import { SkillsFacade } from '../data-access/+state/skills.facade';

@NgModule({
  declarations: [SkillsEntryContainerComponent, SkillsEntryPresenterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiInputModule,
    UiSelectModule,
    MatButtonModule,
    SkillsDataAccessModule,
  ],
  exports: [SkillsEntryContainerComponent],
  providers: [SkillsService, SkillsFacade, SkillsEntryGuard],
})
export class SkillsEntryModule {}
