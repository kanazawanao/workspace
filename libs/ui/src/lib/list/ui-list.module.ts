import { ListContainerComponent } from './container/list-container.component';
import { ListPresenterComponent } from './presenter/list-presenter.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import {
  ListDataSource,
  ListItem,
} from './presenter/list-presenter-input-data';

@NgModule({
  declarations: [ListPresenterComponent, ListContainerComponent],
  imports: [CommonModule, ReactiveFormsModule, MatListModule],
  exports: [ListDataSource, ListItem],
})
export class UiListModule {}
