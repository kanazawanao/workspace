import { SelectContainerComponent } from './select-container.component';
import { SelectOption } from '../select-option';
import { UiSelectModule } from '../ui-select.module';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
const options: SelectOption[] = [
  {
    value: 1,
    viewValue: 'select1',
  },
  {
    value: 2,
    viewValue: 'select2',
  },
  {
    value: 3,
    viewValue: 'select3',
  },
];
export default {
  title: 'SelectContainerComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [UiSelectModule, BrowserAnimationsModule, ReactiveFormsModule],
  },
  component: SelectContainerComponent,
  props: {
    options: of(options),
    labe: 'label',
    isDisabled: false,
    selectFormControl: new FormControl(),
  },
});
export const disabled = () => ({
  moduleMetadata: {
    imports: [UiSelectModule, BrowserAnimationsModule, ReactiveFormsModule],
  },
  component: SelectContainerComponent,
  props: {
    options: of(options),
    labe: 'label',
    isDisabled: true,
    selectFormControl: new FormControl(),
  },
});
