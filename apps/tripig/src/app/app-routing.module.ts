import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@workspace/tripig/top').then((m) => m.TopModule),
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('@workspace/tripig/sign-in').then((m) => m.SignInModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('@workspace/tripig/sign-up').then((m) => m.SignUpModule),
  },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
