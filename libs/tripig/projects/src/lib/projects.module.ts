import { PointSearchComponent } from './point-search/point-search.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { RouteSearchComponent } from './route-search/route-search.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FireAuthService } from '@workspace/shared-service';
import { TripigGuardsModule } from '@workspace/tripig/guards';

@NgModule({
  declarations: [ProjectsComponent, PointSearchComponent, RouteSearchComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    TripigGuardsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [FireAuthService],
})
export class ProjectsModule {}
