import { SkillsRoutingModule } from './skills-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkillsContainerComponent } from './container/skills-container.component';
import { SkillsPresenterComponent } from './presenter/skills-presenter.component';

@NgModule({
  declarations: [SkillsContainerComponent, SkillsPresenterComponent],
  imports: [CommonModule, SkillsRoutingModule],
})
export class SkillsModule {}
