import { AboutRoutingModule } from './about-routing.module';
import { AboutContainerComponent } from './container/about-container.component';
import { AboutPresenterComponent } from './presenter/about-presenter.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AboutPresenterComponent, AboutContainerComponent],
  imports: [CommonModule, AboutRoutingModule],
})
export class AboutModule {}
