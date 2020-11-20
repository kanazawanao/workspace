import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./list/users-list.module').then((m) => m.UsersListModule),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./entry/users-entry.module').then((m) => m.UsersEntryModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
