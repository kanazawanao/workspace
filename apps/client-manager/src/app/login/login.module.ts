import { LoginContainerComponent } from './container/login-container.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from './login.service';
import { LoginPresenterComponent } from './presenter/login-presenter.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { UiInputModule } from '@workspace/ui';

@NgModule({
  declarations: [LoginPresenterComponent, LoginContainerComponent],
  imports: [CommonModule, LoginRoutingModule, UiInputModule, MatButtonModule],
  providers: [LoginService],
})
export class LoginModule {}
