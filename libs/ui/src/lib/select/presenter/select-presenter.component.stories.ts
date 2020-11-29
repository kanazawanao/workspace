import { SelectPresenterInputData } from './select-presenter-input-data';
import { SelectPresenterComponent } from './select-presenter.component';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

const inputData: SelectPresenterInputData = {
  label: 'test',
  isDisabled: false,
  options$: of([
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
  ]),
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
