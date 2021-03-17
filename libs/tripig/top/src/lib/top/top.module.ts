import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FireAuthService } from '@workspace/shared-service';

@NgModule({
  declarations: [TopComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TopRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [FireAuthService],
})
export class TopModule {}
