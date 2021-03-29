import * as BooksActions from './books.actions';
import { BooksEntity } from './books.models';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { IBook } from '@workspace/api-interfaces';
import { EditType } from '@workspace/constants';

export const BOOKS_FEATURE_KEY = 'books';

export interface State extends EntityState<IBook> {
  selectedId?: number;
  loaded: boolean;
  error?: string | null;
  editerMode: EditType;
  workTimelineEntry?: IBook;
}

export interface BooksPartialState {
  readonly [BOOKS_FEATURE_KEY]: State;
}

export const booksAdapter: EntityAdapter<BooksEntity> = createEntityAdapter<BooksEntity>();

export const initialState: State = booksAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  editerMode: EditType.create,
});

const booksReducer = createReducer(
  initialState,
  on(BooksActions.loadBooks, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(BooksActions.loadBooksSuccess, (state, { books }) =>
    booksAdapter.setAll(books, { ...state, loaded: true })
  ),
  on(BooksActions.loadBooksFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return booksReducer(state, action);
}
