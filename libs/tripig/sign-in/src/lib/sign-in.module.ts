import { SignInContainerComponent } from './container/sign-in-container.component';
import { SignInPresenterComponent } from './presenter/sign-in-presenter.component';
import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInService } from './sign-in.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FireAuthService } from '@workspace/shared-service';
import { UiInputModule } from '@workspace/ui';

@NgModule({
  declarations: [SignInContainerComponent, SignInPresenterComponent],
  imports: [
    CommonModule,
    SignInRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    UiInputModule,
  ],
  providers: [SignInService, FireAuthService],
})
export class SignInModule {}
