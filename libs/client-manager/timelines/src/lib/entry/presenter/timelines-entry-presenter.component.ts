import { TimelinesEntryControlName } from '../skills-entry-control-name';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EditType } from '@workspace/constants';

@Component({
  selector: 'client-manager-timelines-entry-presenter',
  templateUrl: './timelines-entry-presenter.component.html',
  styleUrls: ['./timelines-entry-presenter.component.scss'],
})
export class TimelinesEntryPresenterComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() editMode: EditType;
  @Output() registEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();
  controlName = TimelinesEntryControlName;
  /**
   * 編集モードのゲッター
   */
  get editType() {
    return EditType;
  }
  constructor() {}

  ngOnInit(): void {}
}
