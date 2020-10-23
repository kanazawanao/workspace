import { Observable } from 'rxjs';

export class TablePresenterInputData {
  datasource$: Observable<any>;
  displayedColumns$: Observable<string[]>;
}
