import { AboutRoutingModule } from './about-routing.module';
import { AboutService } from './about.service';
import { AboutContainerComponent } from './container/about-container.component';
import { AboutPresenterComponent } from './presenter/about-presenter.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiListModule } from '@workspace/ui';

@NgModule({
  declarations: [AboutPresenterComponent, AboutContainerComponent],
  imports: [CommonModule, AboutRoutingModule, UiListModule],
  providers: [AboutService],
})
export class AboutModule {}
