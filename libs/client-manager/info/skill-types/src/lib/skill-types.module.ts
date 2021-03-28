import { SkillTypesRoutingModule } from './skill-types-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NxModule } from '@nrwl/angular';

@NgModule({
  declarations: [],
  imports: [CommonModule, SkillTypesRoutingModule, NxModule.forRoot()],
})
export class SkillTypesModule {}
