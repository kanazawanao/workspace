import { SkillTypesEntryContainerComponent } from './container/skill-types-entry-container.component';
import { SkillTypesEntryGuard } from './skill-types-entry.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    canActivate: [SkillTypesEntryGuard],
    path: '',
    component: SkillTypesEntryContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillTypesEntryRoutingModule {}
