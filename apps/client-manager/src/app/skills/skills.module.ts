import { SkillsContainerComponent } from './container/skills-container.component';
import { SkillsPresenterComponent } from './presenter/skills-presenter.component';
import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsService } from './skills.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [SkillsContainerComponent, SkillsPresenterComponent],
  imports: [CommonModule, SkillsRoutingModule],
  providers: [SkillsService],
})
export class SkillsModule {}
