import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'skill-info',
    loadChildren: () =>
      import('@workspace/client/skill').then((m) => m.SkillInfoModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('@workspace/client/about').then((m) => m.AboutModule),
  },
  {
    path: 'timeline',
    loadChildren: () =>
      import('@workspace/client/timeline').then((m) => m.TimelineModule),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
