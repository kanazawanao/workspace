import { SkillTypesEntryContainerComponent } from './container/skill-types-entry-container.component';
import { SkillTypesEntryPresenterComponent } from './presenter/skill-types-entry-presenter.component';
import { SkillTypesEntryRoutingModule } from './skill-types-entry-routing.module';
import { SkillTypesEntryGuard } from './skill-types-entry.guard';
import { SkillTypesService } from '../skill-types.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UiInputModule } from '@workspace/ui';
import {
  SkillTypesDataAccessModule,
  SkillTypesFacade,
} from '@workspace/client-manager/data-accesss';

@NgModule({
  declarations: [
    SkillTypesEntryContainerComponent,
    SkillTypesEntryPresenterComponent,
  ],
  imports: [
    CommonModule,
    SkillTypesEntryRoutingModule,
    ReactiveFormsModule,
    UiInputModule,
    SkillTypesDataAccessModule,
  ],
  providers: [SkillTypesFacade, SkillTypesService, SkillTypesEntryGuard],
})
export class SkillTypesEntryModule {}
