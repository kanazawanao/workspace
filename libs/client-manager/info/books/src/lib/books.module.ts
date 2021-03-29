import { BooksRoutingModule } from './books-routing.module';
import { BooksEntryModule } from './entry/books-entry.module';
import { BooksListModule } from './list/books-list.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BooksRoutingModule,
    BooksListModule,
    BooksEntryModule,
  ],
})
export class BooksModule {}
