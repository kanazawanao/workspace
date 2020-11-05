import { FormControl } from '@angular/forms';

export class SelectPresenterInputData {
  label: string;
  isDisabled: boolean;
  options: SelectOption[];
  formControl: FormControl;
}

export class SelectOption {
  value: string;
  viewValue: string;
}
