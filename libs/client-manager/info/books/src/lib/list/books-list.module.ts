import { BooksContainerComponent } from './container/books-container.component';
import { BooksPresenterComponent } from './presenter/books-presenter.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [BooksPresenterComponent, BooksContainerComponent],
  imports: [CommonModule],
})
export class BooksListModule {}
