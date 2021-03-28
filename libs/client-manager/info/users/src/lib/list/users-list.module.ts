import { UsersListContainerComponent } from './container/users-list-container.component';
import { UsersListPresenterComponent } from './presenter/users-list-presenter.component';
import { UsersListGuard } from './users-list.guard';
import { UsersDataAccessModule } from '../data-access/users-data-access.module';
import { UsersService } from '../users.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { UiTableModule } from '@workspace/ui';
import { UsersFacade } from '../data-access/+state/users.facade';

@NgModule({
  declarations: [UsersListPresenterComponent, UsersListContainerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiTableModule,
    UsersDataAccessModule,
    RouterModule,
    MatButtonModule,
  ],
  providers: [UsersService, UsersFacade, UsersListGuard],
})
export class UsersListModule {}
