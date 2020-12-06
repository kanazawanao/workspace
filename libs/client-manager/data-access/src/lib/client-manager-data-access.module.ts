import { ClientManagerService } from './client-manager.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  providers: [ClientManagerService],
})
export class ClientManagerDataAccessModule {}
