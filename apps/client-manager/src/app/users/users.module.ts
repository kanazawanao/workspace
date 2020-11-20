import { UsersRoutingModule } from './users-routing.module';
import { UsersGuard } from './users.guard';
import { UsersService } from './users.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import * as fromUsers from './+state/users.reducer';
import { UsersFacade } from './+state/users.facade';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersRoutingModule,
    StoreModule.forFeature(fromUsers.USERS_FEATURE_KEY, fromUsers.reducer),
    NxModule.forRoot(),
  ],
  providers: [UsersService, UsersFacade, UsersGuard],
})
export class UsersModule {}
