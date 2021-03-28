import { TimelinesListContainerComponent } from './container/timelines-list-container.component';
import { TimelinesListGuard } from './timelines-list.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    canActivate: [TimelinesListGuard],
    component: TimelinesListContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimelinesListRoutingModule {}
