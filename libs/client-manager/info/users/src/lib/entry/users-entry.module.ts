import { UsersEntryContainerComponent } from './container/users-entry-container.component';
import { UsersEntryPresenterComponent } from './presenter/users-entry-presenter.component';
import { UsersEntryRoutingModule } from './users-entry-routing.module';
import { UsersEntryGuard } from './users-entry.guard';
import { UsersDataAccessModule } from '../data-access/users-data-access.module';
import { UsersService } from '../users.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { UiDatePickerModule, UiInputModule } from '@workspace/ui';
import { UsersFacade } from '../data-access/+state/users.facade';

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
