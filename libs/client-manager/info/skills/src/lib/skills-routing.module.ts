import { SkillsEntryContainerComponent } from './entry/container/skills-entry-container.component';
import { SkillsEntryGuard } from './entry/skills-entry.guard';
import { SkillsListContainerComponent } from './list/container/skills-list-container.component';
import { SkillsListGuard } from './list/skills-list.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    canActivate: [SkillsListGuard],
    component: SkillsListContainerComponent,
  },
  {
    path: ':id',
    canActivate: [SkillsEntryGuard],
    component: SkillsEntryContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsRoutingModule {}
