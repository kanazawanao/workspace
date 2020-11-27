import { SelectPresenterInputData } from '../presenter/select-presenter-input-data';
import { SelectOption } from '../select-option';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ui-select-container',
  templateUrl: './select-container.component.html',
  styleUrls: ['./select-container.component.scss'],
})
export class SelectContainerComponent implements OnInit {
  @Input() options: SelectOption[];
  @Input() selectFormControl: FormControl;
  @Input() label: string;
  @Input() isDisabled: boolean;
  presenterInputData: SelectPresenterInputData;
  constructor() {}

  ngOnInit(): void {
    this.setPresenterInputData();
  }
  setPresenterInputData(): void {
    this.presenterInputData = {
      isDisabled: this.isDisabled,
      label: this.label,
      options: this.options,
      formControl: this.selectFormControl,
    };
  }
}
