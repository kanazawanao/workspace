import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@workspace/client-manager/guards';
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
    path: 'skills',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@workspace/client-manager/skills').then((m) => m.SkillsModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('@workspace/client-manager/users').then((m) => m.UsersModule),
  },
  {
    path: 'timelines',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@workspace/client-manager/timelines').then(
        (m) => m.TimelinesModule
      ),
  },
  {
    path: 'skill-types',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@workspace/client-manager/skill-types').then(
        (m) => m.SkillTypesModule
      ),
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
