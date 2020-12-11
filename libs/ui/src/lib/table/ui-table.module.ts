import { TableComponent } from './table.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, ReactiveFormsModule, MatTableModule, MatSortModule],
  exports: [TableComponent],
})
export class UiTableModule {}
