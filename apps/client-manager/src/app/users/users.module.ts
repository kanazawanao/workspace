import { UsersRoutingModule } from './users-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NxModule } from '@nrwl/angular';

@NgModule({
  declarations: [],
  imports: [CommonModule, UsersRoutingModule, NxModule.forRoot()],
})
export class UsersModule {}
