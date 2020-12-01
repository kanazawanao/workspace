import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@workspace/client-manager/guards';
export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'skills',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./skills/skills.module').then((m) => m.SkillsModule),
  },
  {
    path: 'users',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'timelines',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./timelines/timelines.module').then((m) => m.TimelinesModule),
  },
  {
    path: 'skill-types',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./skill-types/skill-types.module').then(
        (m) => m.SkillTypesModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
