import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { BooksFacade } from '../data-access/+state/books.facade';

@Injectable()
export class BooksEntryGuard implements CanActivate {
  constructor(private booksFacade: BooksFacade) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const id = route.params.id;
    if (id === 'entry') {
      this.booksFacade.clearUpdateInitBookEntry();
      return of(true);
    }
    this.booksFacade.loadUpdateInitBookEntry(id);
    return of(true);
  }
}
