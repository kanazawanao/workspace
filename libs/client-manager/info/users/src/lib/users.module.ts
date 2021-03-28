import { UsersRoutingModule } from './users-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NxModule } from '@nrwl/angular';
import { AuthModule } from '@workspace/client-manager/guards';

@NgModule({
  declarations: [],
  imports: [CommonModule, UsersRoutingModule, AuthModule, NxModule.forRoot()],
})
export class UsersModule {}
