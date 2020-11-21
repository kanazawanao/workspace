import { UsersEntryControlName } from '../users-entry-control-name';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EditType } from '@workspace/constants';

@Component({
  selector: 'client-manager-users-entry-presenter',
  templateUrl: './users-entry-presenter.component.html',
  styleUrls: ['./users-entry-presenter.component.scss'],
})
export class UsersEntryPresenterComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() editMode: EditType;
  @Output() registEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();
  controlName = UsersEntryControlName;
  constructor() {}

  ngOnInit(): void {}
  /**
   * 編集モードのゲッター
   */
  get editType() {
    return EditType;
  }
}
