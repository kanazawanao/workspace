import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { BooksFacade } from '../data-access/+state/books.facade';

@Injectable()
export class BooksListGuard implements CanActivate {
  constructor(private booksFacade: BooksFacade) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    this.booksFacade.loadBooks();
    return of(true);
  }
}
