import { Injectable } from '@angular/core';
import { SkillsFacade } from '@workspace/client-manager/data-accesss';
import { Observable, of } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';

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
