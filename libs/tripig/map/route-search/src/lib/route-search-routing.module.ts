import { RouteSearchContainerComponent } from './container/route-search-container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@workspace/tripig/guards';

const routes: Routes = [
  {
    path: '',
    component: RouteSearchContainerComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouteSearchRoutingModule {}
