import { PointSearchContainerComponent } from './container/point-search-container.component';
import { PointSearchRoutingModule } from './point-search-routing.module';
import { PointSearchService } from './point-search.service';
import { PointSearchPresenterComponent } from './presenter/point-search-presenter.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MapService } from '@workspace/tripig/map/service';
import { SuggestListModule } from '@workspace/tripig/map/ui/suggest-list';
import { UiInputModule, UiMapModule, UiTabCategoryModule } from '@workspace/ui';

@NgModule({
  imports: [
    CommonModule,
    PointSearchRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UiMapModule,
    UiInputModule,
    MatButtonModule,
    MatIconModule,
    UiTabCategoryModule,
    SuggestListModule,
  ],
  declarations: [PointSearchContainerComponent, PointSearchPresenterComponent],
  providers: [PointSearchService, MapService],
})
export class PointSearchModule {}
