import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
export const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
