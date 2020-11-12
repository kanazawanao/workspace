import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '@workspace/api-interfaces';

@Component({
  selector: 'client-manager-users-entry-presenter',
  templateUrl: './users-entry-presenter.component.html',
  styleUrls: ['./users-entry-presenter.component.scss'],
})
export class UsersEntryPresenterComponent implements OnInit {
  @Input() userEntryInfo: IUser;
  constructor() {}

  ngOnInit(): void {}
}
