import { ListContainerComponent } from './container/list-container.component';
import { ListPresenterComponent } from './presenter/list-presenter.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [ListPresenterComponent, ListContainerComponent],
  imports: [CommonModule, ReactiveFormsModule, MatListModule, MatIconModule],
})
export class UiListModule {}
