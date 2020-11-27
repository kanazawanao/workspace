import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillTypesEntryRoutingModule } from './skill-types-entry-routing.module';
import { SkillTypesEntryContainerComponent } from './container/skill-types-entry-container.component';
import { SkillTypesEntryPresenterComponent } from './presenter/skill-types-entry-presenter.component';


@NgModule({
  declarations: [SkillTypesEntryContainerComponent, SkillTypesEntryPresenterComponent],
  imports: [
    CommonModule,
    SkillTypesEntryRoutingModule
  ]
})
export class SkillTypesEntryModule { }
