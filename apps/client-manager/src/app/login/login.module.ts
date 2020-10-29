import { LoginContainerComponent } from './container/login-container.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPresenterComponent } from './presenter/login-presenter.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [LoginPresenterComponent, LoginContainerComponent],
  imports: [CommonModule, LoginRoutingModule],
})
export class LoginModule {}
