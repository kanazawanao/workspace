import * as BooksActions from './books.actions';
import * as BooksFeature from './books.reducer';
import * as BooksSelectors from './books.selectors';
import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';

@Injectable()
export class BooksFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(BooksSelectors.getBooksLoaded));
  allBooks$ = this.store.pipe(select(BooksSelectors.getAllBooks));
  selectedBooks$ = this.store.pipe(select(BooksSelectors.getSelected));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  loadBooks() {
    this.store.dispatch(BooksActions.loadBooks());
  }
}
