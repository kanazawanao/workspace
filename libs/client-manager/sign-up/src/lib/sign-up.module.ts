import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { SignUpService } from './sign-up.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { UiInputModule } from '@workspace/ui';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SignUpRoutingModule,
    UiInputModule,
    MatButtonModule,
  ],
  providers: [SignUpService],
})
export class SignUpModule {}
