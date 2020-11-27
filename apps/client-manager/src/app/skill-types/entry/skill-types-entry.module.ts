import { SkillTypesEntryContainerComponent } from './container/skill-types-entry-container.component';
import { SkillTypesEntryPresenterComponent } from './presenter/skill-types-entry-presenter.component';
import { SkillTypesEntryRoutingModule } from './skill-types-entry-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    SkillTypesEntryContainerComponent,
    SkillTypesEntryPresenterComponent,
  ],
  imports: [CommonModule, SkillTypesEntryRoutingModule],
})
export class SkillTypesEntryModule {}
