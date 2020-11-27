import { SidenavContainerComponent } from './container/sidenav-container.component';
import { SidenavPresenterComponent } from './presenter/sidenav-presenter.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidenavContainerComponent, SidenavPresenterComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [SidenavContainerComponent],
})
export class UiSidenavModule {}
