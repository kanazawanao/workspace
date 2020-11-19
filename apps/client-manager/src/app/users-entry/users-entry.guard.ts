import { EditType } from './edit-type';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { UsersEntryFacade } from './+state/users-entry.facade';

@Injectable({
  providedIn: 'root',
})
export class UsersEntryGuard implements CanActivate {
  constructor(private usersEntryFacade: UsersEntryFacade) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const id = route.params.id;
    if (id === 'entry') {
      return of(true);
    }
    this.usersEntryFacade.loadUpdateInitUsersEntry(id);
    this.usersEntryFacade.setEditerMode(EditType.update);
    return of(true);
  }
}
