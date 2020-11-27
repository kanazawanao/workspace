import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillTypesListRoutingModule } from './skill-types-list-routing.module';
import { SkillTypesListPresenterComponent } from './presenter/skill-types-list-presenter.component';
import { SkillTypesListContainerComponent } from './container/skill-types-list-container.component';


@NgModule({
  declarations: [SkillTypesListPresenterComponent, SkillTypesListContainerComponent],
  imports: [
    CommonModule,
    SkillTypesListRoutingModule
  ]
})
export class SkillTypesListModule { }
