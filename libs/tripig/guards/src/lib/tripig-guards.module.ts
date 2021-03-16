import { AuthGuard } from './auth.guard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  providers: [AuthGuard],
})
export class TripigGuardsModule {}
