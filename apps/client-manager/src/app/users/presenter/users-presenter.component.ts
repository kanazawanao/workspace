import { BaseComponent } from '../../base/base-component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'client-manager-users-presenter',
  templateUrl: './users-presenter.component.html',
  styleUrls: ['./users-presenter.component.scss'],
})
export class UsersPresenterComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
