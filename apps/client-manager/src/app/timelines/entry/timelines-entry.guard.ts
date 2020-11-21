import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { TimelinesFacade } from '../+state/timelines.facade';

@Injectable({
  providedIn: 'root',
})
export class TimelinesEntryGuard implements CanActivate {
  constructor(private timelinesFacade: TimelinesFacade) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const id = route.params.id;
    if (id === 'entry') {
      return of(true);
    }
    this.timelinesFacade.loadUpdateInitTimelineEntry(id);
    return of(true);
  }
}
