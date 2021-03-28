import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'client-manager-users-list-presenter',
  templateUrl: './users-list-presenter.component.html',
  styleUrls: ['./users-list-presenter.component.scss'],
})
export class UsersListPresenterComponent implements OnInit {
  @Input() users$: Observable<IUser[]>;
  @Input() displayedColumns: string[];
  @Output() selectEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
