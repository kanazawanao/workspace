import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { TimelinesFacade } from '../+state/timelines.facade';

@Injectable({
  providedIn: 'root',
})
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
