import { BaseComponent } from '../../base/base-component';
import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'client-manager-users-presenter',
  templateUrl: './users-presenter.component.html',
  styleUrls: ['./users-presenter.component.scss'],
})
export class UsersPresenterComponent extends BaseComponent implements OnInit {
  @Input() users$: Observable<IUser[]>;
  @Input() displayedColumns: string[];
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
