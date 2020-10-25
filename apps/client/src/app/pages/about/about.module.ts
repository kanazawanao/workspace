import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutPresenterComponent } from './presenter/about-presenter.component';
import { AboutContainerComponent } from './container/about-container.component';


@NgModule({
  declarations: [AboutPresenterComponent, AboutContainerComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
