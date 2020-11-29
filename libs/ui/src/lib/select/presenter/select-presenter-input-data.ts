import { SelectOption } from '../select-option';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class SelectPresenterInputData {
  label: string;
  isDisabled: boolean;
  options$: Observable<SelectOption[]>;
  formControl: FormControl;
}
