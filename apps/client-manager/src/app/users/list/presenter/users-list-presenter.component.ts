import { BaseComponent } from '../../../base/base-component';
import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'client-manager-users-list-presenter',
  templateUrl: './users-list-presenter.component.html',
  styleUrls: ['./users-list-presenter.component.scss'],
})
export class UsersListPresenterComponent extends BaseComponent
  implements OnInit {
  @Input() users$: Observable<IUser[]>;
  @Input() displayedColumns: string[];
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
