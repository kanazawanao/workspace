import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./list/skills-list.module').then((m) => m.SkillsListModule),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./entry/skills-entry.module').then((m) => m.SkillsEntryModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsRoutingModule {}
