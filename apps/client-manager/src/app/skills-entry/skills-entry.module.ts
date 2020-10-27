import { SkillsEntryContainerComponent } from './container/skills-entry-container.component';
import { SkillsEntryPresenterComponent } from './presenter/skills-entry-presenter.component';
import { SkillsEntryRoutingModule } from './skills-entry-routing.module';
import { SkillsEntryService } from './skills-entry.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { UiInputModule } from '@workspace/ui';

@NgModule({
  declarations: [SkillsEntryPresenterComponent, SkillsEntryContainerComponent],
  imports: [
    CommonModule,
    SkillsEntryRoutingModule,
    UiInputModule,
    MatButtonModule,
  ],
  providers: [SkillsEntryService],
})
export class SkillsEntryModule {}
