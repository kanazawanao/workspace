import { TinelinesEntryContainerComponent } from './container/tinelines-entry-container.component';
import { TinelinesEntryPresenterComponent } from './presenter/tinelines-entry-presenter.component';
import { TimelinesEntryRoutingModule } from './timelines-entry-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    TinelinesEntryPresenterComponent,
    TinelinesEntryContainerComponent,
  ],
  imports: [CommonModule, TimelinesEntryRoutingModule],
})
export class TimelinesEntryModule {}
