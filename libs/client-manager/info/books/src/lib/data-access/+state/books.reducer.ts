import * as BooksActions from './books.actions';
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
  workBookEntry?: IBook;
}

export interface BooksPartialState {
  readonly [BOOKS_FEATURE_KEY]: State;
}

export const booksAdapter: EntityAdapter<IBook> = createEntityAdapter<IBook>();

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
  on(BooksActions.loadBooksFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(BooksActions.loadUpdateInitBookEntry, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(BooksActions.clearUpdateInitBookEntry, (state) => ({
    ...state,
    workBookEntry: {
      author: '',
      description: '',
      impressions: '',
      other: '',
      publisher: '',
      rate: 0,
      title: '',
      type: '',
      url: '',
    },
  })),
  on(
    BooksActions.loadUpdateInitBookEntrySuccess,
    (state, { initBookEntry }) => ({
      ...state,
      loaded: true,
      workTimelineEntry: initBookEntry,
      selectedId: initBookEntry.id,
    })
  ),
  on(BooksActions.loadUpdateInitBookEntryFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(BooksActions.createBook, (state) => ({
    ...state,
    loaded: false,
  })),
  on(BooksActions.createBookSuccess, (state) => ({
    ...state,
    loaded: true,
  })),
  on(BooksActions.createBookFailure, (state, { error }) => ({
    ...state,
    loaded: true,
    error,
  })),
  on(BooksActions.updateBook, (state) => ({
    ...state,
    loaded: false,
  })),
  on(BooksActions.updateBookSuccess, (state) => ({
    ...state,
    loaded: true,
  })),
  on(BooksActions.updateBookFailure, (state, { error }) => ({
    ...state,
    loaded: true,
    error,
  })),
  on(BooksActions.deleteBook, (state) => ({
    ...state,
    loaded: false,
  })),
  on(BooksActions.deleteBookSuccess, (state) => ({
    ...state,
    loaded: true,
  })),
  on(BooksActions.deleteBookFailure, (state, { error }) => ({
    ...state,
    loaded: true,
    error,
  })),
  on(BooksActions.setEditerMode, (state, { editerMode }) => ({
    ...state,
    editerMode: editerMode,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return booksReducer(state, action);
}
