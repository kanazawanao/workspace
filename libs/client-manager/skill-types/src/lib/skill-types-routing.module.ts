import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./list/skill-types-list.module').then(
        (m) => m.SkillTypesListModule
      ),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./entry/skill-types-entry.module').then(
        (m) => m.SkillTypesEntryModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillTypesRoutingModule {}
