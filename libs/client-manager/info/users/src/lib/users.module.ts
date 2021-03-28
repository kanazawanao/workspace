import { UsersEntryModule } from './entry/users-entry.module';
import { UsersListModule } from './list/users-list.module';
import { UsersRoutingModule } from './users-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NxModule } from '@nrwl/angular';
import { AuthModule } from '@workspace/client-manager/guards';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersRoutingModule,
    UsersListModule,
    UsersEntryModule,
    AuthModule,
    NxModule.forRoot(),
  ],
})
export class UsersModule {}
