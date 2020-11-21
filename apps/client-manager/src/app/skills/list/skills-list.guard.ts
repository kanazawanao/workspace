import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { SkillsFacade } from '../+state/skills.facade';

@Injectable({
  providedIn: 'root',
})
export class SkillsListGuard implements CanActivate {
  constructor(private skillsFacade: SkillsFacade) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    this.skillsFacade.loadSkills();
    return of(true);
  }
}
