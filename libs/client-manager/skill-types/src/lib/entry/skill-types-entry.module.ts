import { SkillTypesEntryContainerComponent } from './container/skill-types-entry-container.component';
import { SkillTypesEntryPresenterComponent } from './presenter/skill-types-entry-presenter.component';
import { SkillTypesEntryRoutingModule } from './skill-types-entry-routing.module';
import { SkillTypesEntryGuard } from './skill-types-entry.guard';
import { SkillTypesDataAccessModule } from '../data-access/skill-types-data-access.module';
import { SkillTypesService } from '../skill-types.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { UiInputModule } from '@workspace/ui';
import { SkillTypesFacade } from '../data-access/+state/skill-types.facade';

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
    MatButtonModule,
    SkillTypesDataAccessModule,
  ],
  providers: [SkillTypesFacade, SkillTypesService, SkillTypesEntryGuard],
})
export class SkillTypesEntryModule {}
