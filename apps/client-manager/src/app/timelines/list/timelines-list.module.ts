import { TinelinesListContainerComponent } from './container/tinelines-list-container.component';
import { TinelinesListPresenterComponent } from './presenter/tinelines-list-presenter.component';
import { TimelinesListRoutingModule } from './timelines-list-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    TinelinesListPresenterComponent,
    TinelinesListContainerComponent,
  ],
  imports: [CommonModule, TimelinesListRoutingModule],
})
export class TimelinesListModule {}
