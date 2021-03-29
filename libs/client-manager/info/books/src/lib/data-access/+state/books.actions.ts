import { BooksEntryModel } from '../../books-entry.model';
import { createAction, props } from '@ngrx/store';
import { IBook } from '@workspace/api-interfaces';
import { EditType } from '@workspace/constants';

export const loadBooks = createAction('[Books Page] Load Books');

export const loadBooksSuccess = createAction(
  '[Books/API] Load Books Success',
  props<{ books: IBook[] }>()
);

export const loadBooksFailure = createAction(
  '[Books/API] Load Books Failure',
  props<{ error: any }>()
);

export const loadUpdateInitBookEntry = createAction(
  '[Books Page] Load UpdateInitBookEntry',
  props<{ bookId: string }>()
);

export const clearUpdateInitBookEntry = createAction(
  '[Books Page] Clear UpdateInitBookEntry'
);

export const loadUpdateInitBookEntrySuccess = createAction(
  '[Books/API] Load UpdateInitBookEntry Success',
  props<{ initBookEntry: IBook }>()
);

export const loadUpdateInitBookEntryFailure = createAction(
  '[Books/API] Load UpdateInitBookEntry Failure',
  props<{ error: any }>()
);

export const createBook = createAction(
  '[Books Page] Create Book',
  props<{ bookEntry: BooksEntryModel }>()
);

export const createBookSuccess = createAction(
  '[Books/API] Create Book Success',
  props<{ bookEntry: IBook }>()
);

export const createBookFailure = createAction(
  '[Books/API] Create Book Failure',
  props<{ error: any }>()
);

export const updateBook = createAction(
  '[Books Page] Update Book',
  props<{ id: number; bookEntry: BooksEntryModel }>()
);

export const updateBookSuccess = createAction(
  '[Books/API] Update Book Success',
  props<{ bookEntry: IBook }>()
);

export const updateBookFailure = createAction(
  '[Books/API] Update Book Failure',
  props<{ error: any }>()
);

export const deleteBook = createAction(
  '[Books Page] Delete Book',
  props<{ id: number }>()
);

export const deleteBookSuccess = createAction(
  '[Books/API] Delete Book Success'
);

export const deleteBookFailure = createAction(
  '[Books/API] Delete Book Failure',
  props<{ error: any }>()
);

export const setEditerMode = createAction(
  '[BooksEntry] Set Edit Mode',
  props<{ editerMode: EditType }>()
);
