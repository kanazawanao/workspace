import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { SkillTypesFacade } from '../data-access/+state/skill-types.facade';

@Injectable()
export class SkillTypesEntryGuard implements CanActivate {
  constructor(private skillTypesFacade: SkillTypesFacade) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const id = route.params.id;
    if (id === 'entry') {
      return of(true);
    }
    this.skillTypesFacade.loadUpdateInitSkillTypeEntry(id);
    return of(true);
  }
}
