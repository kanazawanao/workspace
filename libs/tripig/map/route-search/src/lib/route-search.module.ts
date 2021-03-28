import { RouteSearchContainerComponent } from './container/route-search-container.component';
import { RouteSearchPresenterComponent } from './presenter/route-search-presenter.component';
import { RouteSearchRoutingModule } from './route-search-routing.module';
import { RouteSearchService } from './route-search.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MapService } from '@workspace/tripig/map/service';
import { UiMapModule, UiTabCategoryModule } from '@workspace/ui';

@NgModule({
  imports: [
    CommonModule,
    RouteSearchRoutingModule,
    UiMapModule,
    UiTabCategoryModule,
  ],
  declarations: [RouteSearchPresenterComponent, RouteSearchContainerComponent],
  providers: [RouteSearchService, MapService],
})
export class RouteSearchModule {}
