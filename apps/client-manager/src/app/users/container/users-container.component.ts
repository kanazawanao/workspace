import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'client-manager-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss'],
})
export class UsersContainerComponent implements OnInit {
  constructor(private userService: UsersService) {}

  ngOnInit(): void {}
}
