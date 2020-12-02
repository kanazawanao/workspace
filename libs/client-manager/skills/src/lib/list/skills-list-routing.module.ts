import { SkillsListContainerComponent } from './container/skills-list-container.component';
import { SkillsListGuard } from './skills-list.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    canActivate: [SkillsListGuard],
    component: SkillsListContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsListRoutingModule {}
