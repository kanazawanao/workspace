import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthModule } from '@workspace/client-manager/guards';

@NgModule({
  declarations: [InfoComponent],
  imports: [CommonModule, InfoRoutingModule, AuthModule],
})
export class InfoModule {}
