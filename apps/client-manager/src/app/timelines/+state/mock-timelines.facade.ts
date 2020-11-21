import { of } from 'rxjs';

export class MockTimelinesFacade {
  loaded$ = of(true);
  allTimelines$ = of([]);
  selectedTimelines$ = of();

  loadTimelines() {}
}
