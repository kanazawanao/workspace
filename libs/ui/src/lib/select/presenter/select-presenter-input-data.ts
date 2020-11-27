import { SelectOption } from '../select-option';
import { FormControl } from '@angular/forms';

export class SelectPresenterInputData {
  label: string;
  isDisabled: boolean;
  options: SelectOption[];
  formControl: FormControl;
}
