import { BaseComponent } from '../../../base/base.component';
import { IUser } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'client-manager-users-list-presenter',
  templateUrl: './users-list-presenter.component.html',
  styleUrls: ['./users-list-presenter.component.scss'],
})
export class UsersListPresenterComponent
  extends BaseComponent
  implements OnInit, OnDestroy {
  @Input() users$: Observable<IUser[]>;
  @Input() displayedColumns: string[];
  @Output() selectEvent = new EventEmitter();
  constructor() {
    super();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
