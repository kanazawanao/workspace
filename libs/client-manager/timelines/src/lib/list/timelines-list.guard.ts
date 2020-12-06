import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { TimelinesFacade } from '../data-access/+state/timelines.facade';

@Injectable()
export class TimelinesListGuard implements CanActivate {
  constructor(private timelinesFacade: TimelinesFacade) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    this.timelinesFacade.loadTimelines();
    return of(true);
  }
}
