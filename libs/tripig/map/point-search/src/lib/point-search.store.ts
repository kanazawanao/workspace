import { Place } from 'libs/tripig/models/place';
import { BehaviorSubject } from 'rxjs';

export interface PointSearchState {
  selectedList: Place[];
}

export class PointSearchStore {
  private INITIAL_STATE: PointSearchState = {
    selectedList: [],
  };
  public state$: BehaviorSubject<PointSearchState> = new BehaviorSubject<PointSearchState>(
    this.INITIAL_STATE
  );
}
