import { UsersEntryControlName } from '../users-entry-control-name';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'client-manager-users-entry-presenter',
  templateUrl: './users-entry-presenter.component.html',
  styleUrls: ['./users-entry-presenter.component.scss'],
})
export class UsersEntryPresenterComponent implements OnInit {
  @Input() formGroup: FormGroup;
  controlName = UsersEntryControlName;
  constructor() {}

  ngOnInit(): void {}
}
