import { SkillTypesListContainerComponent } from './container/skill-types-list-container.component';
import { SkillTypesListGuard } from './skill-types-list.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    canActivate: [SkillTypesListGuard],
    path: '',
    component: SkillTypesListContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillTypesListRoutingModule {}
