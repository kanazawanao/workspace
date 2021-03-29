import * as BooksActions from './books.actions';
import * as BooksFeature from './books.reducer';
import { BooksDataAccessService } from '../books-data-access.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs/operators';

@Injectable()
export class BooksEffects {
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.loadBooks),
      fetch({
        run: (action) => {
          return this.booksDataAccessService
            .fetchBooks()
            .pipe(map((res) => BooksActions.loadBooksSuccess({ books: res })));
        },
        onError: (action, error) => {
          console.error('Error', error);
          return BooksActions.loadBooksFailure({ error });
        },
      })
    )
  );

  loadUpdateInitTimelineEntry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.loadUpdateInitBookEntry),
      fetch({
        run: (action) => {
          return this.booksDataAccessService.fetchBook(action.bookId).pipe(
            map((res) =>
              BooksActions.loadUpdateInitBookEntrySuccess({
                initBookEntry: res,
              })
            )
          );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return BooksActions.loadUpdateInitBookEntryFailure({ error });
        },
      })
    )
  );

  createTimeline$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.createBook),
      fetch({
        run: (action) => {
          return this.booksDataAccessService
            .postBook(action.bookEntry)
            .pipe(
              map((res) => BooksActions.createBookSuccess({ bookEntry: res }))
            );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return BooksActions.createBookFailure({ error });
        },
      })
    )
  );

  updateTimeline$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.updateBook),
      fetch({
        run: (action) => {
          return this.booksDataAccessService
            .updateBook(action.id, action.bookEntry)
            .pipe(
              map((res) => BooksActions.updateBookSuccess({ bookEntry: res }))
            );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return BooksActions.updateBookFailure({ error });
        },
      })
    )
  );

  deleteTimeline$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.deleteBook),
      fetch({
        run: (action) => {
          return this.booksDataAccessService
            .deleteBook(action.id)
            .pipe(map((res) => BooksActions.deleteBookSuccess()));
        },
        onError: (action, error) => {
          console.error('Error', error);
          return BooksActions.deleteBookFailure({ error });
        },
      })
    )
  );

  constructor(
    private actions$: Actions,
    private booksDataAccessService: BooksDataAccessService
  ) {}
}
