import { SkillTypesRoutingModule } from './skill-types-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkillTypesFacade } from './+state/skill-types.facade';

@NgModule({
  declarations: [],
  imports: [CommonModule, SkillTypesRoutingModule],
  providers: [SkillTypesFacade],
})
export class SkillTypesModule {}
