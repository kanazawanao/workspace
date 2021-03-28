import { InfoComponent } from './info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@workspace/client-manager/guards';

const routes: Routes = [
  {
    path: '',
    component: InfoComponent,
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoRoutingModule {}
