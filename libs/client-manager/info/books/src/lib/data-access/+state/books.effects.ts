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

  constructor(
    private actions$: Actions,
    private booksDataAccessService: BooksDataAccessService
  ) {}
}
