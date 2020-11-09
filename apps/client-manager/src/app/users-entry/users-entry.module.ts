import { UsersEntryContainerComponent } from './container/users-entry-container.component';
import { UsersEntryPresenterComponent } from './presenter/users-entry-presenter.component';
import { UsersEntryRoutingModule } from './users-entry-routing.module';
import { UsersEntryService } from './users-entry.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [UsersEntryContainerComponent, UsersEntryPresenterComponent],
  imports: [CommonModule, UsersEntryRoutingModule],
  providers: [UsersEntryService],
})
export class UsersEntryModule {}
