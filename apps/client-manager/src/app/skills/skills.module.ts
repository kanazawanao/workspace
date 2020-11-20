import { SkillsRoutingModule } from './skills-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NxModule } from '@nrwl/angular';

@NgModule({
  declarations: [],
  imports: [CommonModule, SkillsRoutingModule, NxModule.forRoot()],
})
export class SkillsModule {}
