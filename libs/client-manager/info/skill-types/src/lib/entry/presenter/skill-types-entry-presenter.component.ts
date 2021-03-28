import { SkillTypesEntryControlName } from '../skill-types-entry-control-name';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EditType } from '@workspace/constants';

@Component({
  selector: 'client-manager-skill-types-entry-presenter',
  templateUrl: './skill-types-entry-presenter.component.html',
  styleUrls: ['./skill-types-entry-presenter.component.scss'],
})
export class SkillTypesEntryPresenterComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() editMode: EditType;
  @Output() registEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();
  controlName = SkillTypesEntryControlName;
  /**
   * 編集モードのゲッター
   */
  get editType() {
    return EditType;
  }
  constructor() {}

  ngOnInit(): void {}
}
