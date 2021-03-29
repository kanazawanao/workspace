import { BooksEntryControlName } from '../books-entry-control-name';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EditType } from '@workspace/constants';

@Component({
  selector: 'client-manager-books-entry-presenter',
  templateUrl: './books-entry-presenter.component.html',
  styleUrls: ['./books-entry-presenter.component.scss'],
})
export class BooksEntryPresenterComponent implements OnInit {
  constructor() {}

  @Input() formGroup: FormGroup;
  @Input() editMode: EditType;
  @Output() registEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();
  controlName = BooksEntryControlName;
  /**
   * 編集モードのゲッター
   */
  get editType() {
    return EditType;
  }

  ngOnInit(): void {}
}
