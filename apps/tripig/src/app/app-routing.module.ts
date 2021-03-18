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
    path: 'projects',
    loadChildren: () =>
      import('@workspace/tripig/projects').then((m) => m.ProjectsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
