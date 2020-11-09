import { UsersContainerComponent } from './container/users-container.component';
import { UsersPresenterComponent } from './presenter/users-presenter.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './users.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [UsersPresenterComponent, UsersContainerComponent],
  imports: [CommonModule, UsersRoutingModule],
  providers: [UsersService],
})
export class UsersModule {}
