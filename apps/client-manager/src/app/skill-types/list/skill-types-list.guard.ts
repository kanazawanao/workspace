import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { SkillTypesFacade } from '../+state/skill-types.facade';

@Injectable({
  providedIn: 'root',
})
export class SkillTypesListGuard implements CanActivate {
  constructor(private skillTypssFacade: SkillTypesFacade) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    this.skillTypssFacade.loadSkills();
    return of(true);
  }
}
