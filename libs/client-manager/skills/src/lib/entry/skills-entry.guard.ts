import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { SkillsFacade } from '../data-access/+state/skills.facade';

@Injectable()
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
