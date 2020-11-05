import { SelectContainerComponent } from './select-container.component';
import { SelectOption } from '../presenter/select-presenter-input-data';
import { UiSelectModule } from '../ui-select.module';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { fromEvent } from 'rxjs';
const options: SelectOption[] = [
  {
    value: 'select1',
    viewValue: 'select1',
  },
  {
    value: 'select2',
    viewValue: 'select2',
  },
  {
    value: 'select3',
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
    options: options,
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
    options: options,
    labe: 'label',
    isDisabled: true,
    selectFormControl: new FormControl(),
  },
});
