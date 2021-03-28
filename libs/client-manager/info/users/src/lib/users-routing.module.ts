import { UsersEntryContainerComponent } from './entry/container/users-entry-container.component';
import { UsersEntryGuard } from './entry/users-entry.guard';
import { UsersListContainerComponent } from './list/container/users-list-container.component';
import { UsersListGuard } from './list/users-list.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    canActivate: [UsersListGuard],
    component: UsersListContainerComponent,
  },
  {
    path: ':id',
    canActivate: [UsersEntryGuard],
    component: UsersEntryContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
