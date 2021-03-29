import { BooksListGuard } from './books-list.guard';
import { BooksContainerComponent } from './container/books-container.component';
import { BooksPresenterComponent } from './presenter/books-presenter.component';
import { BooksService } from '../books.service';
import { BooksDataAccessModule } from '../data-access/books-data-access.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { UiTableModule } from '@workspace/ui';
import { BooksFacade } from '../data-access/+state/books.facade';

@NgModule({
  declarations: [BooksPresenterComponent, BooksContainerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BooksDataAccessModule,
    UiTableModule,
    MatButtonModule,
    RouterModule,
  ],
  exports: [BooksContainerComponent],
  providers: [BooksFacade, BooksListGuard, BooksService],
})
export class BooksListModule {}
