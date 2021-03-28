import { SkillTypesEntryModule } from './entry/skill-types-entry.module';
import { SkillTypesListModule } from './list/skill-types-list.module';
import { SkillTypesRoutingModule } from './skill-types-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NxModule } from '@nrwl/angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SkillTypesRoutingModule,
    SkillTypesListModule,
    SkillTypesEntryModule,
    NxModule.forRoot(),
  ],
})
export class SkillTypesModule {}
