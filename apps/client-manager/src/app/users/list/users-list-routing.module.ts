import { UsersListContainerComponent } from './container/users-list-container.component';
import { UsersListGuard } from './users-list.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    canActivate: [UsersListGuard],
    component: UsersListContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersListRoutingModule {}
