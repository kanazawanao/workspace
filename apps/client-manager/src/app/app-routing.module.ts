import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: 'top',
    loadChildren: () =>
      import('@workspace/client-manager/top').then((m) => m.TopModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('@workspace/client-manager/top/login').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('@workspace/client-manager/top/sign-up').then(
        (m) => m.SignUpModule
      ),
  },
  {
    path: 'info',
    loadChildren: () =>
      import('@workspace/client-manager/info').then((m) => m.InfoModule),
  },
  {
    path: '',
    redirectTo: '/top',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
