import * as BooksActions from './books.actions';
import * as BooksFeature from './books.reducer';
import * as BooksSelectors from './books.selectors';
import { BooksEntryModel } from '../../books-entry.model';
import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { EditType } from '@workspace/constants';

@Injectable()
export class BooksFacade {
  constructor(private store: Store) {}

  loaded$ = this.store.pipe(select(BooksSelectors.getBooksLoaded));
  allBooks$ = this.store.pipe(select(BooksSelectors.getAllBooks));
  selectedBooks$ = this.store.pipe(select(BooksSelectors.getSelected));

  workBook$ = this.store.pipe(select(BooksSelectors.getWorkBookEntry));
  editMode$ = this.store.pipe(select(BooksSelectors.getEditerMode));
  selectedId$ = this.store.pipe(select(BooksSelectors.getSelectedId));

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  loadBooks() {
    this.dispatch(BooksActions.loadBooks());
  }

  loadUpdateInitBookEntry(bookId: string) {
    this.setEditerMode(EditType.update);
    this.dispatch(BooksActions.loadUpdateInitBookEntry({ bookId }));
  }

  clearUpdateInitBookEntry() {
    this.dispatch(BooksActions.clearUpdateInitBookEntry());
  }

  createBook(bookEntry: BooksEntryModel) {
    this.dispatch(BooksActions.createBook({ bookEntry }));
  }

  updateBook(id: number, bookEntry: BooksEntryModel) {
    this.dispatch(BooksActions.updateBook({ id, bookEntry }));
  }

  deleteBook(id: number) {
    this.dispatch(BooksActions.deleteBook({ id }));
  }

  setEditerMode(editerMode: EditType) {
    this.store.dispatch(BooksActions.setEditerMode({ editerMode }));
  }
}
