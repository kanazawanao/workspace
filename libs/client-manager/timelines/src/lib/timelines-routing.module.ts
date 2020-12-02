import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./list/timelines-list.module').then((m) => m.TimelinesListModule),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./entry/timelines-entry.module').then(
        (m) => m.TimelinesEntryModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimelinesRoutingModule {}
