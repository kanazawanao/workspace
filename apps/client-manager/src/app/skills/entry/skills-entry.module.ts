import { SkillsEntryContainerComponent } from './container/skills-entry-container.component';
import { SkillsEntryPresenterComponent } from './presenter/skills-entry-presenter.component';
import { SkillsEntryRoutingModule } from './skills-entry-routing.module';
import { SkillsEntryGuard } from './skills-entry.guard';
import { SkillsService } from '../skills.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { UiInputModule, UiSelectModule } from '@workspace/ui';
import {
  SkillsDataAccessModule,
  SkillsFacade,
} from '@workspace/client-manager/data-accesss';

@NgModule({
  declarations: [SkillsEntryContainerComponent, SkillsEntryPresenterComponent],
  imports: [
    CommonModule,
    SkillsEntryRoutingModule,
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
