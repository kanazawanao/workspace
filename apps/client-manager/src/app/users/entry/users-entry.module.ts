import { UsersEntryContainerComponent } from './container/users-entry-container.component';
import { UsersEntryPresenterComponent } from './presenter/users-entry-presenter.component';
import { UsersEntryRoutingModule } from './users-entry-routing.module';
import { UsersEntryGuard } from './users-entry.guard';
import { UsersService } from '../users.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { UiDatePickerModule, UiInputModule } from '@workspace/ui';
import {
  UsersDataAccessModule,
  UsersFacade,
} from '@workspace/client-manager/data-accesss';

@NgModule({
  declarations: [UsersEntryContainerComponent, UsersEntryPresenterComponent],
  imports: [
    CommonModule,
    UsersEntryRoutingModule,
    ReactiveFormsModule,
    UiInputModule,
    UiDatePickerModule,
    MatButtonModule,
    UsersDataAccessModule,
  ],
  providers: [UsersService, UsersFacade, UsersEntryGuard],
})
export class UsersEntryModule {}
