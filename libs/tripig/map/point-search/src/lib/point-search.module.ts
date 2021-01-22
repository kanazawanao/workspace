import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointSearchContainerComponent } from './container/point-search-container.component';
import { PointSearchPresenterComponent } from './presenter/point-search-presenter.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PointSearchContainerComponent, PointSearchPresenterComponent],
})
export class PointSearchModule {}
