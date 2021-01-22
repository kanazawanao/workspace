import { PointSearchContainerComponent } from './container/point-search-container.component';
import { PointSearchRoutingModule } from './point-search-routing.module';
import { PointSearchPresenterComponent } from './presenter/point-search-presenter.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiMapModule } from '@workspace/ui';

@NgModule({
  imports: [CommonModule, PointSearchRoutingModule, UiMapModule],
  declarations: [PointSearchContainerComponent, PointSearchPresenterComponent],
})
export class PointSearchModule {}
