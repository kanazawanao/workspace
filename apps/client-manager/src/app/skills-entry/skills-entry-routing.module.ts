import { SkillsEntryContainerComponent } from './container/skills-entry-container.component';
import { SkillsEntryGuard } from './skills-entry.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    canActivate: [SkillsEntryGuard],
    component: SkillsEntryContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsEntryRoutingModule {}
