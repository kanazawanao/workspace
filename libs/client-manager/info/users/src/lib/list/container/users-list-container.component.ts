import { UsersService } from '../../users.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '@workspace/api-interfaces';
import { UsersFacade } from '../../data-access/+state/users.facade';

@Component({
  selector: 'client-manager-users-list-container',
  templateUrl: './users-list-container.component.html',
  styleUrls: ['./users-list-container.component.scss'],
})
export class UsersListContainerComponent implements OnInit {
  users$ = this.usersFacade.allUsers$;
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'birthDay',
  ];
  constructor(
    private usersFacade: UsersFacade,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {}

  selectEventListner(selectedValue: IUser) {
    console.log(selectedValue);
    this.usersService.navigateSkillTypesEntry(selectedValue.id);
  }
}
