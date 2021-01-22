import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteSearchPresenterComponent } from './presenter/route-search-presenter.component';
import { RouteSearchContainerComponent } from './container/route-search-container.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RouteSearchPresenterComponent, RouteSearchContainerComponent],
})
export class RouteSearchModule {}
