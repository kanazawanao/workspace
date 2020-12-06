import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { SkillTypesFacade } from '../data-access/+state/skill-types.facade';

@Injectable()
export class SkillTypesListGuard implements CanActivate {
  constructor(private skillTypesFacade: SkillTypesFacade) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    this.skillTypesFacade.loadSkillTypes();
    return of(true);
  }
}
