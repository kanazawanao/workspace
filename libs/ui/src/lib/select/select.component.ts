import { SelectOption } from './select-option';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'ui-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() options$: Observable<SelectOption[]>;
  @Input() selectFormControl: FormControl;
  @Input() label: string;
  @Input() isDisabled: boolean;
  constructor() {}

  ngOnInit(): void {}
}
