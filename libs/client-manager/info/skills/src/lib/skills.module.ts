import { SkillsEntryModule } from './entry/skills-entry.module';
import { SkillsListModule } from './list/skills-list.module';
import { SkillsRoutingModule } from './skills-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NxModule } from '@nrwl/angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    SkillsListModule,
    SkillsEntryModule,
    NxModule.forRoot(),
  ],
})
export class SkillsModule {}
