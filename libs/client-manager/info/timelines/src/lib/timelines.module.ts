import { TimelinesRoutingModule } from './timelines-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NxModule } from '@nrwl/angular';

@NgModule({
  declarations: [],
  imports: [CommonModule, TimelinesRoutingModule, NxModule.forRoot()],
})
export class TimelinesModule {}
