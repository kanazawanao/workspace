import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';
import { TopService } from './top.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UiInputModule } from '@workspace/ui';

@NgModule({
  declarations: [TopComponent],
  imports: [
    CommonModule,
    TopRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TopRoutingModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    UiInputModule,
  ],
  providers: [TopService],
})
export class TopModule {}
