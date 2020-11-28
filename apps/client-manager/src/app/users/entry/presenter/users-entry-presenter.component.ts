import { BaseComponent } from '../../../base/base-component';
import { UsersEntryControlName } from '../users-entry-control-name';
import { FormGroup } from '@angular/forms';
import { EditType } from '@workspace/constants';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'client-manager-users-entry-presenter',
  templateUrl: './users-entry-presenter.component.html',
  styleUrls: ['./users-entry-presenter.component.scss'],
})
export class UsersEntryPresenterComponent
  extends BaseComponent
  implements OnInit, OnDestroy {
  @Input() formGroup: FormGroup;
  @Input() editMode: EditType;
  @Output() registEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();
  controlName = UsersEntryControlName;
  constructor() {
    super();
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
  /**
   * 編集モードのゲッター
   */
  get editType() {
    return EditType;
  }
}
