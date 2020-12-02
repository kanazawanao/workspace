import { TimelinesEntryContainerComponent } from './container/timelines-entry-container.component';
import { TimelinesEntryGuard } from './timelines-entry.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    canActivate: [TimelinesEntryGuard],
    component: TimelinesEntryContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimelinesEntryRoutingModule {}
