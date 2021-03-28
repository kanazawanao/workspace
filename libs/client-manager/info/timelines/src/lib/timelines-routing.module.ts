import { TimelinesEntryContainerComponent } from './entry/container/timelines-entry-container.component';
import { TimelinesEntryGuard } from './entry/timelines-entry.guard';
import { TimelinesListContainerComponent } from './list/container/timelines-list-container.component';
import { TimelinesListGuard } from './list/timelines-list.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    canActivate: [TimelinesListGuard],
    component: TimelinesListContainerComponent,
  },
  {
    path: ':id',
    canActivate: [TimelinesEntryGuard],
    component: TimelinesEntryContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimelinesRoutingModule {}
