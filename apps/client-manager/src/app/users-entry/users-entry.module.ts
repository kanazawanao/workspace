import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersEntryRoutingModule } from './users-entry-routing.module';
import { UsersEntryContainerComponent } from './container/users-entry-container.component';
import { UsersEntryPresenterComponent } from './presenter/users-entry-presenter.component';


@NgModule({
  declarations: [UsersEntryContainerComponent, UsersEntryPresenterComponent],
  imports: [
    CommonModule,
    UsersEntryRoutingModule
  ]
})
export class UsersEntryModule { }
