import { RouteSearchContainerComponent } from './container/route-search-container.component';
import { RouteSearchPresenterComponent } from './presenter/route-search-presenter.component';
import { RouteSearchRoutingModule } from './route-search-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiMapModule } from '@workspace/ui';

@NgModule({
  imports: [CommonModule, RouteSearchRoutingModule, UiMapModule],
  declarations: [RouteSearchPresenterComponent, RouteSearchContainerComponent],
})
export class RouteSearchModule {}
