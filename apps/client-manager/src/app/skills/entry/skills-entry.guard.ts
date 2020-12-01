import { Injectable } from '@angular/core';
import { SkillsFacade } from '@workspace/client-manager/data-accesss';
import { Observable, of } from 'rxjs';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SkillsEntryGuard implements CanActivate {
  constructor(private skillsEntryFacade: SkillsFacade) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    this.skillsEntryFacade.loadSkillTypes();
    const id = route.params.id;
    if (id === 'entry') {
      return of(true);
    }
    this.skillsEntryFacade.loadUpdateInitSkillsEntry(id);
    return of(true);
  }
}
