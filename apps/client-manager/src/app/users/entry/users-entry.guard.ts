import { Injectable } from '@angular/core';
import { UsersFacade } from '@workspace/client-manager/data-accesss';
import { Observable, of } from 'rxjs';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsersEntryGuard implements CanActivate {
  constructor(private usersEntryFacade: UsersFacade) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const id = route.params.id;
    if (id === 'entry') {
      return of(true);
    }
    this.usersEntryFacade.loadUpdateInitUsersEntry(id);
    return of(true);
  }
}
