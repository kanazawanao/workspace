import { SkillTypesListContainerComponent } from './container/skill-types-list-container.component';
import { SkillTypesListPresenterComponent } from './presenter/skill-types-list-presenter.component';
import { SkillTypesListGuard } from './skill-types-list.guard';
import { SkillTypesDataAccessModule } from '../data-access/skill-types-data-access.module';
import { SkillTypesService } from '../skill-types.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { UiTableModule } from '@workspace/ui';
import { SkillTypesFacade } from '../data-access/+state/skill-types.facade';

@NgModule({
  declarations: [
    SkillTypesListPresenterComponent,
    SkillTypesListContainerComponent,
  ],
  imports: [
    CommonModule,
    UiTableModule,
    SkillTypesDataAccessModule,
    MatButtonModule,
    RouterModule,
  ],
  providers: [SkillTypesFacade, SkillTypesService, SkillTypesListGuard],
})
export class SkillTypesListModule {}
