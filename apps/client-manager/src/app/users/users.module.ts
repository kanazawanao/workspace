import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersPresenterComponent } from './presenter/users-presenter.component';
import { UsersContainerComponent } from './container/users-container.component';


@NgModule({
  declarations: [UsersPresenterComponent, UsersContainerComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
