import { ListComponent } from './list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, ReactiveFormsModule, MatListModule, MatIconModule],
  exports: [ListComponent],
})
export class UiListModule {}
