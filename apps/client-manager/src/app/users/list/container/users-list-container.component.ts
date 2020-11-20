import { BaseComponent } from '../../../base/base-component';
import { Component, OnInit } from '@angular/core';
import { UsersFacade } from '../../+state/users.facade';

@Component({
  selector: 'client-manager-users-list-container',
  templateUrl: './users-list-container.component.html',
  styleUrls: ['./users-list-container.component.scss'],
})
export class UsersListContainerComponent extends BaseComponent
  implements OnInit {
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
