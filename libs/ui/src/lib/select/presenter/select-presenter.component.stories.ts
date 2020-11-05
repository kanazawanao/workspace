import { SelectPresenterInputData } from './select-presenter-input-data';
import { SelectPresenterComponent } from './select-presenter.component';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const inputData: SelectPresenterInputData = {
  label: 'test',
  isDisabled: false,
  options: [
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
  ],
  formControl: new FormControl(),
};
export default {
  title: 'SelectPresenterComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [
      CommonModule,
      ReactiveFormsModule,
      MatSelectModule,
      MatFormFieldModule,
      BrowserAnimationsModule,
    ],
  },
  component: SelectPresenterComponent,
  props: {
    inputData: inputData,
  },
});
