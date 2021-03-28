import { SkillsListContainerComponent } from './container/skills-list-container.component';
import { SkillsListPresenterComponent } from './presenter/skills-list-presenter.component';
import { SkillsListRoutingModule } from './skills-list-routing.module';
import { SkillsListGuard } from './skills-list.guard';
import { SkillsDataAccessModule } from '../data-access/skills-data-access.module';
import { SkillsService } from '../skills.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UiTableModule } from '@workspace/ui';
import { SkillsFacade } from '../data-access/+state/skills.facade';

@NgModule({
  declarations: [SkillsListPresenterComponent, SkillsListContainerComponent],
  imports: [
    CommonModule,
    SkillsListRoutingModule,
    ReactiveFormsModule,
    UiTableModule,
    SkillsDataAccessModule,
  ],
  exports: [SkillsListContainerComponent],
  providers: [SkillsService, SkillsFacade, SkillsListGuard],
})
export class SkillsListModule {}
