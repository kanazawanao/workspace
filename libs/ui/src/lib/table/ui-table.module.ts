import { TableContainerComponent } from './container/table-container.component';
import { TablePresenterComponent } from './presenter/table-presenter.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [TablePresenterComponent, TableContainerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
  ],
  exports: [TableContainerComponent],
})
export class UiTableModule {}
