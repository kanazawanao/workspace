import { TableContainerComponent } from './container/table-container.component';
import { TablePresenterComponent } from './presenter/table-presenter.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [TablePresenterComponent, TableContainerComponent],
  imports: [CommonModule, ReactiveFormsModule, MatTableModule],
})
export class UiTableModule {}
