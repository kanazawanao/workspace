import { UsersEntryContainerComponent } from './container/users-entry-container.component';
import { UsersEntryGuard } from './users-entry.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    canActivate: [UsersEntryGuard],
    component: UsersEntryContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersEntryRoutingModule {}
