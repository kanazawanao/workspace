import { Injectable } from '@angular/core';
import { SkillTypesFacade } from '@workspace/client-manager/data-accesss';
import { Observable, of } from 'rxjs';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
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
