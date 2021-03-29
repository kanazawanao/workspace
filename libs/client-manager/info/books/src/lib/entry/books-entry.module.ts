import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BooksEntryContainerComponent } from './container/books-entry-container.component';
import { BooksEntryPresenterComponent } from './presenter/books-entry-presenter.component';

@NgModule({
  declarations: [BooksEntryContainerComponent, BooksEntryPresenterComponent],
  imports: [CommonModule],
})
export class BooksEntryModule {}
