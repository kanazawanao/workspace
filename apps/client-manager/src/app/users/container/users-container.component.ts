import { BaseComponent } from '../../base/base-component';
import { Component, OnInit } from '@angular/core';
import { UsersFacade } from '../+state/users.facade';

@Component({
  selector: 'client-manager-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss'],
})
export class UsersContainerComponent extends BaseComponent implements OnInit {
  users$ = this.usersFacade.allUsers$;
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'birthDay',
  ];
  constructor(private usersFacade: UsersFacade) {
    super();
  }

  ngOnInit(): void {}
}
