import { SkillTypesEntryContainerComponent } from './entry/container/skill-types-entry-container.component';
import { SkillTypesEntryGuard } from './entry/skill-types-entry.guard';
import { SkillTypesListContainerComponent } from './list/container/skill-types-list-container.component';
import { SkillTypesListGuard } from './list/skill-types-list.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    canActivate: [SkillTypesListGuard],
    component: SkillTypesListContainerComponent,
  },
  {
    path: ':id',
    canActivate: [SkillTypesEntryGuard],
    component: SkillTypesEntryContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillTypesRoutingModule {}
