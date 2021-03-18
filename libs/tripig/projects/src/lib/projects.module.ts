import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class ProjectsModule {}
