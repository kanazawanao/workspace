import { SkillInfoContainerComponent } from './container/skill-info-container.component';
import { SkillInfoPresenterComponent } from './presenter/skill-info-presenter.component';
import { SkillInfoRoutingModule } from './skill-info-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UiTableModule } from '@workspace/ui';

@NgModule({
  declarations: [SkillInfoPresenterComponent, SkillInfoContainerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiTableModule,
    SkillInfoRoutingModule,
  ],
})
export class SkillInfoModule {}
