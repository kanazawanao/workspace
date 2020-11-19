import { BaseComponent } from '../../base/base-component';
import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'client-manager-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss'],
})
export class UsersContainerComponent extends BaseComponent implements OnInit {
  constructor(private userService: UsersService) {
    super();
  }

  ngOnInit(): void {}
}
