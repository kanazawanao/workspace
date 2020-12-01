import { UsersListContainerComponent } from './container/users-list-container.component';
import { UsersListPresenterComponent } from './presenter/users-list-presenter.component';
import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListGuard } from './users-list.guard';
import { UsersService } from '../users.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UiTableModule } from '@workspace/ui';
import {
  UsersDataAccessModule,
  UsersFacade,
} from '@workspace/client-manager/data-accesss';

@NgModule({
  declarations: [UsersListPresenterComponent, UsersListContainerComponent],
  imports: [
    CommonModule,
    UsersListRoutingModule,
    ReactiveFormsModule,
    UiTableModule,
    UsersDataAccessModule,
  ],
  providers: [UsersService, UsersFacade, UsersListGuard],
})
export class UsersListModule {}
