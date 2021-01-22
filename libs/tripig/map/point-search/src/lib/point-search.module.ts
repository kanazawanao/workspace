import { PointSearchContainerComponent } from './container/point-search-container.component';
import { PointSearchRoutingModule } from './point-search-routing.module';
import { PointSearchPresenterComponent } from './presenter/point-search-presenter.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, PointSearchRoutingModule],
  declarations: [PointSearchContainerComponent, PointSearchPresenterComponent],
})
export class PointSearchModule {}
