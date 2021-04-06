import { BooksEntryControlName } from '../books-entry-control-name';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EditType } from '@workspace/constants';
import { SelectOption } from '@workspace/ui';
import { Observable, of } from 'rxjs';

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
  rateOptions: Observable<SelectOption[]> = of([
    { value: 1, viewValue: '1' },
    { value: 2, viewValue: '2' },
    { value: 3, viewValue: '3' },
    { value: 4, viewValue: '4' },
    { value: 5, viewValue: '5' },
  ]);
  controlName = BooksEntryControlName;
  /**
   * 編集モードのゲッター
   */
  get editType() {
    return EditType;
  }

  ngOnInit(): void {}
}
