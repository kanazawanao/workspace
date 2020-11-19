import { BaseComponent } from '../../base/base-component';
import { UsersEntryControlName } from '../users-entry-control-name';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'client-manager-users-entry-presenter',
  templateUrl: './users-entry-presenter.component.html',
  styleUrls: ['./users-entry-presenter.component.scss'],
})
export class UsersEntryPresenterComponent extends BaseComponent
  implements OnInit {
  @Input() formGroup: FormGroup;
  @Output() registEvent = new EventEmitter();
  controlName = UsersEntryControlName;
  constructor() {
    super();
  }

  ngOnInit(): void {}

  regist() {
    this.registEvent.emit();
  }
}
