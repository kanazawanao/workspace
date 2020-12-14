import { SignUpContainerComponent } from './container/sign-up-container.component';
import { SignUpPresenterComponent } from './presenter/sign-up-presenter.component';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpService } from './sign-up.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UiInputModule } from '@workspace/ui';

@NgModule({
  declarations: [SignUpContainerComponent, SignUpPresenterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SignUpRoutingModule,
    MatButtonModule,
    MatIconModule,
    UiInputModule,
  ],
  providers: [SignUpService],
})
export class SignUpModule {}
