import { SkillsEntryRoutingModule } from './skills-entry-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkillsEntryPresenterComponent } from './presenter/skills-entry-presenter.component';
import { SkillsEntryContainerComponent } from './container/skills-entry-container.component';

@NgModule({
  declarations: [SkillsEntryPresenterComponent, SkillsEntryContainerComponent],
  imports: [CommonModule, SkillsEntryRoutingModule],
})
export class SkillsEntryModule {}
