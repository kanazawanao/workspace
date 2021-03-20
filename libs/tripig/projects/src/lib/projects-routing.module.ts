import { ProjectsComponent } from './projects.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@workspace/tripig/guards';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'map/point-search',
        loadChildren: () =>
          import('@workspace/tripig/map/point-search').then(
            (m) => m.PointSearchModule
          ),
      },
      {
        path: 'map/route-search',
        loadChildren: () =>
          import('@workspace/tripig/map/route-search').then(
            (m) => m.RouteSearchModule
          ),
      },
      {
        path: '',
        redirectTo: 'map/point-search',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
