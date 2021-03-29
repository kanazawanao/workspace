import { BooksDataAccessService } from './books-data-access.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromBooks from './+state/books.reducer';
import { BooksEffects } from './+state/books.effects';
import { BooksFacade } from './+state/books.facade';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromBooks.BOOKS_FEATURE_KEY, fromBooks.reducer),
    EffectsModule.forFeature([BooksEffects]),
  ],
  providers: [BooksFacade, BooksDataAccessService],
})
export class BooksDataAccessModule {}
