import { SkillTypesListContainerComponent } from './container/skill-types-list-container.component';
import { SkillTypesListPresenterComponent } from './presenter/skill-types-list-presenter.component';
import { SkillTypesListRoutingModule } from './skill-types-list-routing.module';
import { SkillTypesListGuard } from './skill-types-list.guard';
import { SkillTypesService } from '../skill-types.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiTableModule } from '@workspace/ui';
import {
  SkillTypesDataAccessModule,
  SkillTypesFacade,
} from '@workspace/client-manager/data-accesss';

@NgModule({
  declarations: [
    SkillTypesListPresenterComponent,
    SkillTypesListContainerComponent,
  ],
  imports: [
    CommonModule,
    SkillTypesListRoutingModule,
    UiTableModule,
    SkillTypesDataAccessModule,
  ],
  providers: [SkillTypesFacade, SkillTypesService, SkillTypesListGuard],
})
export class SkillTypesListModule {}
